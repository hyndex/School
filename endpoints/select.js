import React from 'react'

//Role, Department, designation, category, Batch, ClassIC, ExamType, Class, Year
export default function Select(id = 'none') {
    var table = []
    table.push(<option key='1' value="rabbit">Rabbit</option>)
    table.push(<option key='2' value="rabbit">Rabbit</option>)
    table.push(<option key='3' value="rabbit">Rabbit</option>)
    table.push(<option key='4' value="rabbit">Rabbit</option>)
    table.push(<option key='5' value="rabbit">Rabbit</option>)
    return table
}

// export default class SelectOption extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             batch: [],
//             department: [],
//             designation: [],
//             category: [],
//             stafftype: [],
//             examtype: [],
//             class: [],
//             year: [],
//         }
//     }
//     componentDidMount() {
//         fetch('http://' + SERVER_URL + '/api/batch/', {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded",
//                 'Accept': 'application/json',
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 this.setState({ batch: data })
//             })
//         fetch('http://' + SERVER_URL + '/api/department/', {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded",
//                 'Accept': 'application/json',
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 this.setState({ department: data })
//             })
//         fetch('http://' + SERVER_URL + '/api/designation/', {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded",
//                 'Accept': 'application/json',
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 this.setState({ designation: data })
//             })
//         fetch('http://' + SERVER_URL + '/api/category/', {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded",
//                 'Accept': 'application/json',
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 this.setState({ category: data })
//             })
//         fetch('http://' + SERVER_URL + '/api/stafftype/', {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded",
//                 'Accept': 'application/json',
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 this.setState({ stafftype: data })
//             })
//         fetch('http://' + SERVER_URL + '/api/examtype/', {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded",
//                 'Accept': 'application/json',
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 this.setState({ examtype: data })
//             })
//         fetch('http://' + SERVER_URL + '/api/class/', {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded",
//                 'Accept': 'application/json',
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 this.setState({ class: data })
//             })
//         fetch('http://' + SERVER_URL + '/api/year/', {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded",
//                 'Accept': 'application/json',
//             }
//         })
//             .then(response => response.json())
//             .then((data) => {
//                 this.setState({ year: data })
//             })

//         store.dispatch(UpdateUser(this.state))

//     }
//     render() {
//         var table = []
//         table.push(<option key='1' value="rabbit">Rabbit</option>)
//         table.push(<option key='2' value="rabbit">Rabbit</option>)
//         table.push(<option key='3' value="rabbit">Rabbit</option>)
//         table.push(<option key='4' value="rabbit">Rabbit</option>)
//         table.push(<option key='5' value="rabbit">Rabbit</option>)
//         return (
//             <table />
//         )
//     }
// }