import React from 'react'
// import fetch from 'isomorphic-unfetch'
// import store from '../Reducers/Reducer'
// import UpdateUser from '../Actions/UserAction'
// import UpdatePermission from '../Actions/PermissionAction'
// import Cookies from 'universal-cookie';
import SERVER_URL from '../endpoints/Server'



export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            logged: false,
            AutoLog=false
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
    render() {
        if(this.state.AutoLog==false){
            AutoLog()
        }
        

        if (this.state.logged == false || new Cookies().get('logged') != true) {
            var cookies = new Cookies();
            const logged = cookies.get('logged')
            this.setState({ logged: logged })
            this.setState({ tried: 1 })
            store.dispatch(UpdateUser(logged))
        }
        if (this.state.logged == true) {
            return (
                window.location.replace("./Admission")

            );
        }
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

                    <title>Hello, world!</title>
                </head>
                <body>
                    <div className="container margin-centre card w-25 my-5">
                        <div className="card-body">
                            <form action="#">
                                <div className="form-group">
                                    <label for="Username">Username</label>
                                    <input type="text" className="form-control" id="Username" name="username" placeholder="Enter username" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="Password">Password</label>
                                    <input type="password" className="form-control" id="Password" name="password" placeholder="Password" onChange={this.handleChange} />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.Login}>Submit</button>
                            </form>
                        </div>
                    </div>


                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                </body>
            </html>
        )
    }
}