import React from 'react'
import Link from 'next/link'
import {withRouter} from 'next/router';
import store from '../Reducers/Reducer'
import UpdateNav from '../Actions/NavAction'


export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <a className="navbar-brand" href="#">School Management</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
						<li className="nav-item">
                            <Link href="./Logout" key='0'> 
								<a className="nav-link">Logout</a>
							</Link>
                        </li>
						<li className="nav-item">
                            <Link href="./Register" key='0'> 
								<a className="nav-link">Register</a>
							</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Reports
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link href='/AttendenceReport' key='1'><a className="dropdown-item">Attendence</a></Link>
     
                            <Link href='/FailListReport' key='3'><a className="dropdown-item">Fail-List</a></Link>
                            <Link href='/MarkReport' key='4'><a className="dropdown-item">Mark</a></Link>
                            <Link href='/PlacementReport' key='5'><a className="dropdown-item">Placement</a></Link>
                            <Link href='/RankReport' key='6'><a className="dropdown-item">Rank</a></Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
         
            </nav>
        )
    }
}

