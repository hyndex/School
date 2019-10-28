import React from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import {CSVLink} from "react-csv";

import Show from '../components/Show'
import ReactTable from 'react-table'
import Cookies from 'universal-cookie';
import store from '../Reducers/Reducer'
import SERVER_URL from '../endpoints/Server'



export default class ReportApp extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role: 'student',
            logged: true,
            columns:[],
            selected: null
        }
        this.download=this.download.bind(this)
    }
    handleClick(params) {
        console.log(params)
    }
    async componentDidMount() {
        fetch('http://' + SERVER_URL + '/api/staff/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => {
                if (!response.ok) throw new Error(response.status);
                return response
            })
            .catch((err) => {
                console.log('ERRRRRR', err.message)
                if (err.message == '401') {
                    window.location.replace("./Login");
                }
            })
        this.setState({columns:this.props.columns})

    }
    download(event) {
        var columns=this.state.columns
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
            // click the  CSVLink component to trigger the CSV download
            this.csvLink.link.click()
        })
    }
    render() {
        console.log(this.state)
        // if(this.state.Logged == true){
        //     window.location.replace("./Admission");
        // }
        // console.log('APP data : ', this.props.fields_data)
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
                                    columns={this.state.columns}
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