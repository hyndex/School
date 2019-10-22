import React from 'react'
import {YearColumns as Column} from '../components/Columns'
import {PostForm,PutForm} from '../forms/Year'
import SERVER_URL from '../endpoints/Server'
import App from '../components/App';



export default class Year extends React.Component {
    constructor() {
        super()
        this.state = {
            fields_data:[],
        }
    }
    async componentDidMount() {
        await fetch('http://'+SERVER_URL+'/api/year/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => this.setState({
                fields_data: data
            }))
    }
    render() {
        console.log('API Data :- ',this.state.fields_data)
        return (
            <div>
                <App PostForm={PostForm} PutForm={PutForm} Column={Column} fields_data={this.fields_data}/>
            </div>
            )
    }
}