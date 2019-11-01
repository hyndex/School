import React from 'react'
import { RankReportColumns as columns } from '../components/Columns'
import SERVER_URL from '../endpoints/Server'
import ReportApp from '../components/ReportApp';


export default class Year extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role:'student',
            logged: true,
            fields_data: [],
        }
    }
    async componentDidMount() {
        await fetch('http://' + SERVER_URL+'/api/markreport/', {
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
                <ReportApp columns={columns} fields_data={this.state.fields_data}/>
            </div>
        )
    }
}