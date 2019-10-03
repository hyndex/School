import React from 'react'
import DepartmentAllocationFrom from '../forms/DepartmentAllocation'

export default class Test extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <DepartmentAllocationFrom/>
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