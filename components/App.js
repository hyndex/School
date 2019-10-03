import React from 'react'
import { MDBDataTable } from 'mdbreact';
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import data from '../demo/tabledata'
import TableGen from '../components/Tablegen'

export default class App extends React.Component{
    render(){
        return(
            <div>
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