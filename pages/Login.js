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
            AutoLog: false,
            status:404
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
    Login() {
        
        fetch('http://' + SERVER_URL + '/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({"email":this.state.username,"password":this.state.password}),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }).then(async (res) => {
            try {
                this.setState({status:res.status})
            } catch (error) { console.error(error) }
            return res
        }).then(()=>{
                var cookies = new Cookies();
                var logged = false
                console.log('response',this.state.status)
                if (this.state.status == 200) {
                    logged = true
                }
                console.log(this.state.status)
                cookies.set('logged', logged);
                console.log(cookies.get('logged'));
                store.dispatch(UpdateUser(cookies.get('logged')))
                this.setState({ logged: cookies.get('logged') })
            })
        .catch(err => { console.error(err) })
    }
    AutoLog() {
        fetch('http://' + SERVER_URL + '/api/staff/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }).then(async (res) => {
            try {
                const cookies = new Cookies();
                var logged = true
                if (await res.status == '401') {
                    logged = false
                }
                cookies.set('logged', logged);
                store.dispatch(UpdateUser(cookies.get('logged')))
                this.setState({ logged: logged })
                this.setState({ AutoLog: true })
            } catch (error) { console.error(error) }
        }).catch(err => { console.error(err) })
    }
    componentDidMount() {
        if (this.state.AutoLog == false) {
            this.AutoLog()
        }
    }
    render() {
        if(this.state.logged == true){
            window.location.replace("./Student");
        }
        console.log(this.state)
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