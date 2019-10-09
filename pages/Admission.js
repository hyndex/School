import React from 'react'
import AdmissionFrom from '../forms/Admisson'
import { MDBDataTable } from 'mdbreact';
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import data from '../demo/tabledata'
import Post from '../components/Post'
// require('dotenv').config()

export default class Admisson extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role:'student',
            logged: true,  
            
            
        }
    }
    // async componentDidMount() {
    //     await fetch('http://'+SERVER_URL+'/admission/', {
    //         method: 'GET',
    //         headers: {
    //             "Content-type": "application/x-www-form-urlencoded",
    //             'Accept': 'application/json',
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             fields_data: data
    //         }))
    // }
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
                                    <Post postform={<AdmissionFrom/>}/>
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