import React from 'react'
import {BatchColumns as Column} from '../components/Columns'
import {PostForm,PutForm} from '../forms/Batch'
import SERVER_URL from '../endpoints/Server'



export default class Batch extends React.Component {
    constructor() {
        super()
        this.state = {
            fields_data:[],
        }
    }
    async componentDidMount() {
        await fetch('http://'+SERVER_URL+'/api/batch/', {
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
                <App PostForm={PostForm} PostForm={PutForm} Column={Column} fields_data={this.fields_data}/>
            </div>
            )
    }
}
//clickEvent?: ()=>