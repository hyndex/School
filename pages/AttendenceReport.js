import React from 'react'
import { AttendenceReportColumns as columns } from '../components/Columns'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import ReportApp from '../components/ReportApp';
import SERVER_URL from '../endpoints/Server'


export default class AttendenceReport extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role:'student',
            logged: true,
            fields_data: [],
            dataToDownload: [],
        }
        this.download = this.download.bind(this)
    }
    async componentDidMount() {
        await fetch('http://' + SERVER_URL+'/api/attendencereport/', {
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
                <ReportApp Column={columns} fields_data={this.state.fields_data}/>
            </div>
        )
    }
}