import React from 'react'
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
				absentees:[]

            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Create = this.Create.bind(this)
    }
    handleChange(e) {
        const { post_data } = { ...this.state };
        const currentState = post_data;
        const { name, value } = e.target;
        currentState[name] = value;

        this.setState({ post_data: currentState })

        console.log('POST STATE=>', this.state.post_data)
    }
    Create = () => {
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
            .then(async (data) => await (data == 201) ? alert('Successful') : alert('Not Successful'))
    }
    render() {
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
                            <input id="date" name="date" key='date' onChange={this.handleChange} placeholder="Date" type="date" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="end" className="col-4 col-form-label">Subject</label>
                    <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-calendar-times-o"></i>
                                </div>
                            </div>
                            <input id="subject" name="subject" key='subject' onChange={this.handleChange} placeholder="End Date" type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="batch" className="col-4 col-form-label">absentees</label>
                    <div className="col-8">
                        <input id="absentees" name="absentees" key='absentees' onChange={this.handleChange} placeholder="absentees" type="text" className="form-control" />
                    </div>
                </div>
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
				absentees:[]

            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Delete = this.Delete.bind(this)
        this.Update = this.Update.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/attendence/' + this.state.id + '/', {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state.put_data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 201) ? alert('Successful') : alert('You can not update a sample'))
    }
    Delete(e) {
        fetch('http://' + SERVER_URL + '/api/attendence/' + this.state.id, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 204) ? alert('Successful') : alert('Not Successful'))
    }
    handleChange(e) {
        const { put_data } = { ...this.state };
        const currentState = put_data;
        const { name, value } = e.target;
        currentState[name] = value;

        this.setState({ put_data: currentState })

        console.log('PUT STATE=>', this.state.put_data)
    }
    render() {
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
                <div className="form-group row">
                    <label htmlFor="batch" className="col-4 col-form-label">Batch</label>
                    <div className="col-8">
                        <input id="absentees" name="absentees" key='absentees' value={this.props.select.absentees} onChange={this.handleChange} placeholder="absentees" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" onClick={this.Update} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
