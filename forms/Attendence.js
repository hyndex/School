import React from 'react'
import { Fragment } from 'react'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            post_data:
            {
                date: '',
                subject: '',
                class: '',
                absentees: []

            },
            questions: [],
            student:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.Create = this.Create.bind(this)
        this.handleText = this.handleText.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.addQuestion = this.addQuestion.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    //////////////////////////////////////////////////////////////
    handleText = i => e => {
        let questions = [...this.state.questions]
        questions[i] = e.target.value
        this.setState({
            questions
        })
    }

    handleDelete = i => e => {
        e.preventDefault()
        let questions = [
            ...this.state.questions.slice(0, i),
            ...this.state.questions.slice(i + 1)
        ]
        this.setState({
            questions
        })
    }

    addQuestion = e => {
        e.preventDefault()
        let questions = this.state.questions.concat([''])
        this.setState({
            questions
        })
    }
    //////////////////////////////////////////////////////////////
    handleChange(e) {
        const { post_data } = { ...this.state };
        const currentState = post_data;
        const { name, value } = e.target;
        currentState[name] = value;

        this.setState({ post_data: currentState })

        console.log('POST STATE=>', this.state.post_data)
    }
    Create = () => {
        var { post_data } = {...this.state}
        var absentees = this.state.questions
        post_data.absentees = absentees;
        this.setState({post_data:post_data})

        fetch('http://' + SERVER_URL + '/api/attendence/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state.post_data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data < 300) ? window.location.reload() : alert('Not Successful'))
    }
    componentDidMount(){
        fetch('http://' + SERVER_URL + '/api/student/', {
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
                        table.push(<option data-tokens={item.name} key={item._id} value={item._id}>{item.roll} {item.name}</option>);
                    })
                    console.log('TABLE=>',table)
                    this.setState({ student: table })
                })
                .catch((err)=>console.log(err))
            .catch((err)=>console.log(err))
            
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="start" className="col-4 col-form-label">Date</label>
                    <div className="col-8">
                        <div className="input-group">
                            <input id="date" name="date" key='date' onChange={this.handleChange} placeholder="Date" type="date" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="hour" className="col-4 col-form-label">Hour</label>
                    <div className="col-8">
                        <div className="input-group">
                            <input id="hour" name="hour" key='hour' onChange={this.handleChange} placeholder="hour" type="number" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="subject" className="col-4 col-form-label">subject</label>
                    <div className="col-8">
                        <select id='subject' name='subject' key='subject' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.subject}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="class" className="col-4 col-form-label">class</label>
                    <div className="col-8">
                        <select id='class' name='class' key='class' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.class}
                        </select>
                    </div>
                </div>
                <Fragment>
                    {this.state.questions.map((question, index) => (
                        <span key={index}>
                            <div className="form-group row">
                                <label htmlFor="student" className="col-4 col-form-label">student</label>
                                <div className="col-8">
                                    <select id='student' class="form-control selectpicker" data-live-search="true" name='student' key='student' onChange={this.handleText(index)} required='required' className="custom-select">
                                        {this.state.student}
                                    </select>
                                </div>
                            </div>
                            <button class="btn btn-danger" onClick={this.handleDelete(index)}>delete</button>
                        </span>
                    ))}
                    <button class="btn btn-success mx-1 my-1" onClick={this.addQuestion}>Add New Absentee</button>
                </Fragment>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" onClick={this.Create} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}



///////////////////////////////////////////////////////
// Edit Form
//////////////////////////////////////////////////////


export class PutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            put_data:
            {
                date: '',
                subject: '',
                class: '',
                absentees: []

            },
            flag:0,
            questions: [],
            student:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.Update = this.Update.bind(this)
        this.Delete = this.Delete.bind(this)
        this.handleText = this.handleText.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.addQuestion = this.addQuestion.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    //////////////////////////////////////////////////////////////
    handleText = i => e => {
        let questions = [...this.state.questions]
        questions[i] = e.target.value
        this.setState({
            questions
        })
    }

    handleDelete = i => e => {
        e.preventDefault()
        let questions = [
            ...this.state.questions.slice(0, i),
            ...this.state.questions.slice(i + 1)
        ]
        this.setState({
            questions
        })
    }

    addQuestion = e => {
        e.preventDefault()
        let questions = this.state.questions.concat([''])
        this.setState({
            questions
        })
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/attendence/' + this.props.select._id + '/', {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state.put_data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data < 300) ? window.location.reload() : alert('You can not update a sample'))
    }
    Delete(e) {
        fetch('http://' + SERVER_URL + '/api/attendence/' + this.props.select._id, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data < 300) ? window.location.reload() : alert('Not Successful'))
    }
    handleChange(e) {
        const { put_data } = { ...this.state };
        const currentState = put_data;
        const { name, value } = e.target;
        currentState[name] = value;

        this.setState({ put_data: currentState })

        console.log('PUT STATE=>', this.state.put_data)
    }
    flagUpdate = () => {
        if(this.props.select._id==undefined && this.state.flag==0){
            this.setState({
                questions:this.props.select.absentees,
                flag:1
            })
            
        }
    }
    render() {
        return(
            <div class="alert alert-danger" role="alert">
                You can not update attendence
            </div>
        )
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="start" className="col-4 col-form-label">Date</label>
                    <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-calendar-plus-o"></i>
                                </div>
                            </div>
                            <input id="date" name="date" key='date' value={this.props.select.date} onChange={this.handleChange} placeholder="Date" type="date" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="end" className="col-4 col-form-label">End Date</label>
                    <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-calendar-times-o"></i>
                                </div>
                            </div>
                            <input id="subject" name="subject" key='subject' value={this.props.select.subject} onChange={this.handleChange} placeholder="End Date" type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <Fragment>
                    {this.state.questions.map((question, index) => (
                        <span key={index}>
                            <div className="form-group row">
                                <label htmlFor="student" className="col-4 col-form-label">student</label>
                                <div className="col-8">
                                    <select id='student' defaultValue={this.state.questions[index] || ''} class="form-control selectpicker" data-live-search="true" name='student' key='student' onChange={this.handleText(index)} required='required' className="custom-select">
                                        {this.state.student}
                                    </select>
                                </div>
                            </div>
                            <button class="btn btn-danger" onClick={this.handleDelete(index)}>delete</button>
                        </span>
                    ))}
                    <button class="btn btn-success mx-1 my-1" onClick={this.addQuestion}>Add New Absentee</button>
                </Fragment>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" onClick={this.Update} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
