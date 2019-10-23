import React from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import Post from '../components/Post'
import Show from '../components/Show'
import ReactTable from 'react-table'
import Cookies from 'universal-cookie';
import store from '../Reducers/Reducer'
import SERVER_URL from '../endpoints/Server'



export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role: 'student',
            logged: true,
        }
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
            if(!response.ok) throw new Error(response.status);
            return response
        })
        .catch((err) => {
            console.log('ERRRRRR',err.message)
            if(err.message == '401'){
                window.location.replace("./Login");
            }
        })

    }

    render() {
        console.log(this.state)
        // if(this.state.Logged == true){
        //     window.location.replace("./Admission");
        // }
        console.log('APP data : ',this.props.fields_data)
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <NavBar username={this.state.username} />
                        </div>
                    </div>
                    <div className="row my-4">
                        <SideBar role={this.state.role} />
                        <div className="row card card-body mx-4">
                            <div id='Body'>
                                <button type="button" className="btn btn-primary my-2" data-toggle="modal" data-target="#postform">
                                    Create
                                    </button>
                                <Post postform={<this.props.PostForm />} />
                                <Show editform={<this.props.PutForm />} />
                                {console.log(this.props.Column)}
                                <ReactTable
                                    columns={this.props.Column}
                                    data={this.props.fields_data}
                                    filterable
                                    defaultPageSize={10}
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