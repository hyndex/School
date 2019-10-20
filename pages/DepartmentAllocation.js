import React from 'react'
import {DepartmentAllocationColumns as Column} from '../components/Columns'
import {PostForm,PutForm} from '../forms/DepartmentAllocation'
import SERVER_URL from '../endpoints/Server'


export default class DepartmentAllocation extends React.Component {
    constructor() {
        super()
        this.state = {
            fields_data:[],
        }
    }
    async componentDidMount() {
        await fetch('http://'+SERVER_URL+'/departmentallocation/', {
            method: 'GET',
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