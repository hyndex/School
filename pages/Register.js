import React from 'react'
import fetch from 'isomorphic-unfetch'
import SERVER_URL from '../endpoints/Server'
import App from '../components/App';



export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.Register = this.Register.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    
    Register() {
        fetch('http://' + SERVER_URL+'/auth/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
        .then(response => response.status)
        .then(async (data) => await (data < 300) ? alert('Successful') : alert('Unable to register account'))

    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <div className="container margin-centre card w-25 my-5">
                    <div className="card-body">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="Username">email</label>
                                <input type="text" className="form-control" id="email" name="email" key='email' placeholder="Enter email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor= "Password">Password</label>
                                <input type="password" className="form-control" id="password" key="password" name="password" placeholder="Password" onChange={this.handleChange} />
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