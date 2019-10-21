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
    Register() {
        fetch('http://' + SERVER_URL+'/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }).then(async (res) => {
            try {
                const data = await res.json()
                if (data.status == 200) {
                    logged = true
                }
            } catch (error) { console.error(error) }
        }).catch(err => { console.error(err) })
    }
    
    render() {
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
                            <button type="button" className="btn btn-primary" onClick={this.Register}>SignUp</button>
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