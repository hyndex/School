import React from 'react'
import store from '../Reducers/Reducer'
import SERVER_URL from '../endpoints/Server'
import UpdateOption from '../Actions/OptionAction'


//Role, Department, designation, category, Batch, ClassIC, ExamType, Class, Year,subjecttype
// export default function Select(id = 'none') {
//     var table = []
//     table.push(<option key='1' value="rabbit">Rabbit</option>)
//     table.push(<option key='2' value="rabbit">Rabbit</option>)
//     table.push(<option key='3' value="rabbit">Rabbit</option>)
//     table.push(<option key='4' value="rabbit">Rabbit</option>)
//     table.push(<option key='5' value="rabbit">Rabbit</option>)
//     return table
// }

export default class SelectOption extends React.Component {
    constructor() {
        super()
        this.state = {
            batch: [],
            department: [],
            designation: [],
            category: [],
            stafftype: [],
            examtype: [],
            class: [],
            year: [],
            subjecttype:[],
            examname:[],
            examtype:[],
            staff:[],
            flag:null
        }
    }
    componentDidMount() {
        this.setState({flag:null})
        fetch('http://' + SERVER_URL + '/api/batch/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.batchShortcode}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ batch: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/department/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.name}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ department: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/designation/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.type}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ designation: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/category/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.category}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ category: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/stafftype/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.type}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ stafftype: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/examtype/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.type}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ examtype: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/class/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.classname}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ class: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/year/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.year}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ year: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/examname/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.name}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ examname: table })
            })
            .catch((err)=>console.log(err))
        fetch('http://' + SERVER_URL + '/api/subjecttype/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then((data) => {
                var table = []
                data.map(function(item){
                    table.push(<option key={item._id} value={item._id}>{item.type}</option>);
                })
                console.log('TABLE=>',table)
                this.setState({ subjecttype: table })
            })
            .catch((err)=>console.log(err))
            fetch('http://' + SERVER_URL + '/api/examtype/', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then((data) => {
                    var table = []
                    data.map(function(item){
                        table.push(<option key={item._id} value={item._id}>{item.type}</option>);
                    })
                    console.log('TABLE=>',table)
                    this.setState({ examtype: table })
                })
                .catch((err)=>console.log(err))
            .catch((err)=>console.log(err))
            fetch('http://' + SERVER_URL + '/api/staff/', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then((data) => {
                    var table = []
                    data.map(function(item){
                        table.push(<option key={item._id} value={item._id}>{item.name}</option>);
                    })
                    console.log('TABLE=>',table)
                    this.setState({ staff: table })
                    this.setState({flag:1})
                })
                .catch((err)=>console.log(err))
    }
    render() {      
        console.log('PRELOAD=>',this.state)
        if(this.state.flag == null){
            store.dispatch(UpdateOption(this.state))
        }
        
        return (
            <div>{}</div>
        )
    }
}