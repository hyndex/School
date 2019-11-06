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
        this.AutoLog = this.AutoLog.bind(this)
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
        })
		.then(response => response.status)
		.then((data)=>{
			if(data<300){
				console.log('status',data)
				var logged = true
				var cookies = new Cookies
				cookies.set('logged', logged);
				store.dispatch(UpdateUser(cookies.get('logged')))
				this.setState({ logged: logged })
				this.setState({ AutoLog: true })
				window.location.replace("./Student")
			}
			else{
				alert('Login Failed')
			}
		})	
    }
    AutoLog() {
        fetch('http://' + SERVER_URL + '/api/staff/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
		.then(response => response.status)
		.then((data)=>{
			if(data<300){
				console.log('status',data)
				var logged = true
				var cookies = new Cookies
				cookies.set('logged', logged);
				store.dispatch(UpdateUser(cookies.get('logged')))
				this.setState({ logged: logged })
				this.setState({ AutoLog: true })
				window.location.replace("./Student")
			}
			else{
				this.setState({ AutoLog: true })
			}
		})		
    }
    componentDidMount() {
        this.AutoLog()
		console.log('STSS',this.state)
    }
    render() {
		if (this.state.AutoLog == false) {
            this.AutoLog()
			
        }
        //if(new Cookies().get('logged') == 'true'){
        //    window.location.replace("./Student");
        //}
		if(this.state.logged == true){
            window.location.replace("./Student");
        }
		console.log('STS ',this.state)
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