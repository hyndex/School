import React from 'react'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            post_data:
            {
                start: '',
                end: '',
                batchShortcode: '',

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
        fetch('http://' + SERVER_URL + '/api/batch/', {
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
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="start" className="col-4 col-form-label">Start Date</label>
                    <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-calendar-plus-o"></i>
                                </div>
                            </div>
                            <input id="start" name="start" key='start' onChange={this.handleChange} placeholder="Start Date" type="date" className="form-control" />
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
                            <input id="end" name="end" key='end' onChange={this.handleChange} placeholder="End Date" type="date" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="batch" className="col-4 col-form-label">Batch</label>
                    <div className="col-8">
                        <input id="batchShortcode" name="batchShortcode" key='batchShortcode' onChange={this.handleChange} placeholder="Batch" type="text" className="form-control" />
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
                start: '',
                end: '',
                batchShortcode: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Delete = this.Delete.bind(this)
        this.Update = this.Update.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/batch/' + this.props.select._id + '/', {
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
        fetch('http://' + SERVER_URL + '/api/batch/' + this.props.select._id, {
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
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="start" className="col-4 col-form-label">Start Date</label>
                    <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-calendar-plus-o"></i>
                                </div>
                            </div>
                            <input id="start" name="start" key='start' placeholder={this.props.select.start} onChange={this.handleChange} type="date" className="form-control" />
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
                            <input id="end" name="end" key='end' placeholder={this.props.select.end} onChange={this.handleChange} type="date" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="batch" className="col-4 col-form-label">Batch</label>
                    <div className="col-8">
                        <input id="batchShortcode" name="batchShortcode" key='batchShortcode' placeholder={this.props.select.batchShortcode} onChange={this.handleChange} type="text" className="form-control" />
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
