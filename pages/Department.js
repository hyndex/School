import React from 'react'
import {DepartmentColumns} from '../components/Columns'
import {PostFrom ,PutForm} from '../forms/Department'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import Post from '../components/Post'
import Show from '../components/Show'
import ReactTable from 'react-table'
import SERVER_URL from '../endpoints/Server'


export default class Department extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role:'student',
            logged: true,
            fields_data:'',
        }
    }
    async componentDidMount() {
        await fetch('http://'+SERVER_URL+'/department/', {
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
                <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                            <NavBar username={this.state.username}/>
                            </div>
                        </div>
                        <div className="row my-3">
                            <SideBar role={this.state.role}/>
                            <div className="row card card-body mx-4">
                                <div id='Body'>
                                    <button type="button" className="btn btn-primary my-2" data-toggle="modal" data-target="#postform">
                                        Create
                                    </button>
                                    <Post postform={<PostFrom />}/>
                                    <Show editform={<PutForm />}/>
                                    <ReactTable
                                    columns={DepartmentColumns}
                                    data={this.state.data}
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
                <link rel="stylesheet" href="./static/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="./static/css/SideBar.css"/>
                <link rel="stylesheet" href="./static/css/react-table.css"/>
                <script src="./static/js/jquery-3.3.1.slim.min.js"></script>
                <script src="./static/js/popper.min.js"></script>
                <script src="./static/js/bootstrap.min.js"></script>
            </div>
            )
    }
}