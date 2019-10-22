import React from 'react'
import { AttendenceReportColumns } from '../components/Columns'
import {CSVLink} from "react-csv";
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import Post from '../components/Post'
import Show from '../components/Show'
import ReactTable from 'react-table'
import SERVER_URL from '../endpoints/Server'
import Cookies from 'universal-cookie';


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
        // const cookies = new Cookies();
        // if (cookies.get('logged') != true) {
        //     window.location.replace("./Login");
        // }
        await fetch('http://' + SERVER_URL+'/api/year/', {
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
    download(event) {
        var columns=AttendenceReportColumns
        const currentRecords = this.reactTable.getResolvedState().sortedData;
        var data_to_download = []
        for (var index = 0; index < currentRecords.length; index++) {
            let record_to_download = {}
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                record_to_download[columns[colIndex].Header] = currentRecords[index][columns[colIndex].accessor]
            }
            data_to_download.push(record_to_download)
        }
        this.setState({ dataToDownload: data_to_download }, () => {
            // click the CSVLink component to trigger the CSV download
            this.csvLink.link.click()
        })
    }
    render() {
        
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <NavBar username={this.state.username} />
                        </div>
                    </div>
                    <div className="row my-3">
                        <SideBar role={this.state.role} />
                        <div className="row card card-body mx-4">
                            <div id='Body'>
                                <div>
                                    <button onClick={this.download}>
                                        Download
                                    </button>
                                </div>
                                <div>
                                    <CSVLink
                                        data={this.state.dataToDownload}
                                        filename="data.csv"
                                        className="hidden"
                                        ref={(r) => this.csvLink = r}
                                        target="_blank" />

                                </div>
                                <ReactTable
                                    ref ={(r) => this.reactTable = r}
                                    columns={AttendenceReportColumns}
                                    data={this.state.fields_data}
                                    filterable
                                    defaultPageSize={7}
                                    noDataText={'Please wait....'}
                                // showPaginationTop
                                >

                                </ReactTable>
                            </div>
                        </div>
                    </div>
                </div>
                <link rel="stylesheet" href="./static/css/bootstrap.min.css" />
                <link rel="stylesheet" href="./static/css/SideBar.css" />
                <link rel="stylesheet" href="./static/css/react-table.css" />
                <script src="./static/js/jquery-3.3.1.slim.min.js"></script>
                <script src="./static/js/popper.min.js"></script>
                <script src="./static/js/bootstrap.min.js"></script>
            </div>
        )
    }
}