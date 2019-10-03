import React from 'react'
import { MDBDataTable } from 'mdbreact';
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import data from '../demo/tabledata'
import Post from '../components/Post'
import AdmissionFrom from '../forms/Admisson'
import BatchFrom from '../forms/Batch'
import Department from '../forms/Department'
import DepartmentAllocationFrom from '../forms/DepartmentAllocation'
import DesignationForm from '../forms/Designation'
import ExamBrowserFrom from '../forms/ExamBrowser'
import ExamNameFrom from '../forms/ExamName'
import ExamTypeFrom from '../forms/ExamType'
import RoleForm from '../forms/Role'
import SemesterForm from '../forms/Semester'
import StaffForm from '../forms/Staff'
import SubjectTypeForm from '../forms/SubjectType'
import Year from '../forms/Year'


export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.info.username}</h1>
                <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                            <NavBar username={this.props.info.username}/>
                            </div>
                        </div>
                        <div className="row my-3">
                            <SideBar role={this.props.info.role}/>
                            <div className="row card card-body mx-4">
                                <div id='Body'>
                                    <button type="button" className="btn btn-primary my-2" data-toggle="modal" data-target="#postform">
                                        Create
                                    </button>
                                    <Post postform={AdmissionFrom()}/>
                                    <MDBDataTable striped bordered hover data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                <link rel="stylesheet" href="./static/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="./static/css/SideBar.css"/>
                <script src="./static/js/jquery-3.3.1.slim.min.js"></script>
                <script src="./static/js/popper.min.js"></script>
                <script src="./static/js/bootstrap.min.js"></script>
            </div>
        )
    }
}