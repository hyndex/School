import React from 'react'
import {MarkColumns as Column} from '../components/Columns'
import {PostForm,PutForm} from '../forms/Designation'
import SERVER_URL from '../endpoints/Server'
import App from '../components/App';


export default class Designation extends React.Component {
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
        await fetch('http://'+SERVER_URL+'/api/mark/', {
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
                <App name={'Mark'} PostForm={PostForm} PutForm={PutForm} Column={Column} fields_data={this.state.fields_data}/>
            </div>
            )
    }
}