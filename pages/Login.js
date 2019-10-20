import React from 'react'
import ReactDom from 'react-dom'
import fetch from 'isomorphic-unfetch'
import store from '../Reducers/Reducer'
import UpdateUser from '../Actions/UserAction'
import Cookies from 'universal-cookie';
import SERVER_URL from '../endpoints/Server'



export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            logged: false,
            AutoLog: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.Login = this.Login.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    // Login(){
    //     return true
    // }
    Login() {
        fetch('http://' + SERVER_URL + '/login/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }).then(async (res) => {
            try {
                const data = await res.json()
                const cookies = new Cookies();
                logged = false
                if (data.status == 200) {
                    logged = true
                }
                cookies.set('logged', logged);
                console.log(cookies.get('logged'));
                store.dispatch(UpdateUser(cookies.get('logged')))
                this.setState({ logged: cookies.get('logged') })
            } catch (error) { console.error(error) }
        }).catch(err => { console.error(err) })
    }
    AutoLog() {
        fetch('http://' + SERVER_URL + '/users/', {
            method: 'GET',
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }).then(async (res) => {
            try {
                const data = await res.json()
                const cookies = new Cookies();
                logged = false
                if (data.status == 200) {
                    logged = true
                }
                cookies.set('logged', logged);
                console.log(cookies.get('logged'));
                store.dispatch(UpdateUser(cookies.get('logged')))
                this.setState({ logged: cookies.get('logged') })
                this.setState({ AutoLog: true })
            } catch (error) { console.error(error) }
        }).catch(err => { console.error(err) })
    }
    componentDidMount() {
        if (this.state.logged == true) {
            window.location.replace("./Admission");
        }
      }
    
    render() {
        if (this.state.AutoLog == false) {
            this.AutoLog()
        }


        else if ((this.state.AutoLog == true) && (this.state.logged == false || new Cookies().get('logged') != true)) {
            var cookies = new Cookies();
            const logged = cookies.get('logged')
            this.setState({ logged: logged })
            store.dispatch(UpdateUser(logged))
        }

        return (
            <div>
                <div className="container margin-centre card w-25 my-5">
                    <div className="card-body">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor=    "Username">Username</label>
                                <input type="text" className="form-control" id="Username" name="username" placeholder="Enter username" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor=    "Password">Password</label>
                                <input type="password" autoComplete="current-password" className="form-control" id="Password" name="password" placeholder="Password" onChange={this.handleChange} />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor=    "exampleCheck1">Check me out</label>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.Login}>Submit</button>
                        </form>
                    </div>
                </div>
                <link rel="stylesheet" href="./static/css/bootstrap.min.css" />
                <link rel="stylesheet" href="./static/css/SideBar.css" />
                <link rel="stylesheet" href="./static/css/react-table.css" />
                <script src="./static/js/jquery-3.3.1.slim.min.js"></script>
                <script src="./static/js/popper.min.js"></script>
                <script src="./static/js/bootstrap.min.js"></script>

            </div>
        )
    }
}