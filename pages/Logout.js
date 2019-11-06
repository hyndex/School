import React from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import Post from '../components/Post'
import Show from '../components/Show'
import ReactTable from 'react-table'
import Cookies from 'universal-cookie';
import store from '../Reducers/Reducer'
import UpdateSelect from '../Actions/SelectAction'
import SERVER_URL from '../endpoints/Server'
import SelectOption from '../endpoints/select'



export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role: 'student',
            logged: true,
            selected: null,
        }
        this.handleClose = this.handleClose.bind(this)
    }
    handleClick(params) {
        console.log(params)
    }
    handleClose() {
        this.setState({
            selected: null
        })
    }
    async componentDidMount() {
        fetch('http://' + SERVER_URL + '/auth/logout', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
		.then(response => response.status)
        .then(async (data) => await (data < 300) ? window.location.replace("./Login") : window.location.replace("./Login"))


    }

    render() {
        return (
            <div>
            </div>
        )
    }
}