import React from 'react'
import {ExamNameColumns as Column} from '../components/Columns'
import {PostForm,PutForm} from '../forms/ExamName'
import SERVER_URL from '../endpoints/Server'
import Cookies from 'universal-cookie';
import App from '../components/App';


export default class ExamName extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role:'student',
            logged: true,
            fields_data:[],
        }
    }
    async componentDidMount() {
        const cookies = new Cookies();
        if (cookies.get('logged') != true) {
            window.location.replace("./Login");
        }
        await fetch('http://'+SERVER_URL+'/api/examname/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => this.setState({
                fields_data: data
            }))
    }
    render() {
        return (
            <div>
                <App name={'Examname'} PostForm={PostForm} PutForm={PutForm} Column={Column} fields_data={this.state.fields_data}/>
            </div>
            )
    }
}