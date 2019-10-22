import React from 'react'
import ReactDom from 'react-dom'
import fetch from 'isomorphic-unfetch'
import store from '../Reducers/Reducer'
import UpdateUser from '../Actions/UserAction'
import Cookies from 'universal-cookie';
import SERVER_URL from '../endpoints/Server'
import App from '../components/App';



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
            window.location.replace("./Student");
      }
    
    render() {
        return (
            <div>
               
            </div>
        )
    }
}