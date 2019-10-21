import React from 'react'
import {PostForm,PutForm} from '../forms/Admisson'
import {AdmissionColumns as Column} from '../components/Columns'
import SERVER_URL from '../endpoints/Server'
import App from '../components/App';



export default class Admisson extends React.Component {
    constructor() {
        super()
        this.state = {
            fields_data:[],
        }
    }
    handleClick(params){
        console.log(params)
    }
    componentDidMount() {
        fetch('http://'+SERVER_URL+'/api/admission/', {
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