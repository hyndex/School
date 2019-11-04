import React from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import Post from '../components/Post'
import Show from '../components/Show'
import ReactTable from 'react-table'
import Cookies from 'universal-cookie';
import store from '../Reducers/Reducer'
import UpdateSelect from '../Actions/SelectAction'
import SERVER_URL from '../endpoints/Server'
import SelectOption from '../endpoints/select'



export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            role: 'student',
            logged: true,
            selected: null,
        }
        this.handleClose = this.handleClose.bind(this)
    }
    handleClick(params) {
        console.log(params)
    }
    handleClose() {
        this.setState({
            selected: null
        })
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

    }

    render() {
        console.log(this.state)
        // if(this.state.Logged == true){
        //     window.location.replace("./Admission");
        // }
        // console.log('APP data : ', this.props.fields_data)
        return (
            <div>
                <SelectOption />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <NavBar username={this.state.username} />
                        </div>
                    </div>
                    <div className="row my-4">
                        <SideBar selected={this.props.name} />
                        <div className="row card card-body mx-4">
                            <div id='Body'>
                                {
                                    (this.state.selected == null) ?
                                        (<button type="button" className="btn btn-primary my-2" data-toggle="modal" data-target="#postform">
                                            Create
                                        </button>)
                                        :
                                        <div></div>
                                }
                                <Post postform={<this.props.PostForm option={store.getState().option.payload.option}/>} />

                                {
                                    (this.state.selected == null) ?
                                        (<ReactTable
                                            columns={this.props.Column}
                                            data={this.props.fields_data}
                                            filterable
                                            defaultPageSize={10}
                                            noDataText={'Please wait....'}
                                            getTrProps={(state, rowInfo) => {
                                                if (rowInfo && rowInfo.row) {
                                                    return {
                                                        onClick: (e) => {
                                                            this.setState({
                                                                selected: rowInfo.index,
                                                            })
                                                            store.dispatch(UpdateSelect(rowInfo))
                                                        },
                                                        style: {
                                                            background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
                                                            color: rowInfo.index === this.state.selected ? 'white' : 'black'
                                                        }
                                                    }
                                                } else {
                                                    return {}
                                                }
                                            }
                                            }
                                        // showPaginationTop
                                        >

                                        </ReactTable>)
                                        :

                                        <div>
                                            <button onClick={this.handleClose} type="button" className="btn btn-danger my-2">Cancel</button>
                                            <this.props.PutForm
                                                select={store.getState().select.payload.select.original}
                                                option={store.getState().option.payload.option}
                                            />
                                        </div>
                                }
                                {
                                    console.log("STORE=>", store.getState().option.payload.option)
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"></script>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="./static/css/bootstrap.min.css" />
                <link rel="stylesheet" href="./static/css/SideBar.css" />
                <link rel="stylesheet" href="./static/css/react-table.css" />
                <script src="./static/js/jquery-3.3.1.slim.min.js"></script>
                <script src="./static/js/popper.min.js"></script>
                <script src="./static/js/myJs.js"></script>
                <script src="./static/js/bootstrap.min.js"></script>
            </div>
        )
    }
}