import React from 'react'
import Select from '../endpoints/select'

export class PostFrom extends React.Component {
    constructor() {
        super()
        this.state = {
            post_data:
            {
                department: '',
                code: '',
                short: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
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
        const data = {
            name: this.state.post_data.name,
            client_id: this.state.post_data.client,
        }
        console.log(JSON.stringify(data))
        fetch('http://' + SERVER_URL + '/depertment/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 200) ? alert('Successful') : alert('Not Successful'))
    }
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="Department" className="col-4 col-form-label">Department Name</label>
                    <div className="col-8">
                        <input id="department" name="department" key='department' onChange={this.handleChange} placeholder="Department Name" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="code" className="col-4 col-form-label">Department Code</label>
                    <div className="col-8">
                        <input id="code" name="code" placeholder="Department Code" key='code' onChange={this.handleChange} type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="short" className="col-4 col-form-label">Short Name</label>
                    <div className="col-8">
                        <input id="short" name="short" placeholder="Short Name" key='short' onChange={this.handleChange} type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" type="submit" onClick={this.Create} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export class PutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            put_data:
            {
                department: '',
                code: '',
                short: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
    }
    Update = (e) => {
        // e.preventDefault()
        const data = this.state.put_data
        console.log(JSON.stringify(data))
        fetch('http://' + SERVER_URL + '/admission/' + this.state.id + '/', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 200) ? alert('Successful') : alert('You can not update a sample'))
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
                    <label htmlFor="Department" className="col-4 col-form-label">Department Name</label>
                    <div className="col-8">
                        <input id="department" name="department" key='department' value={this.state.put_data.department} onChange={this.handleChange} placeholder="Department Name" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="code" className="col-4 col-form-label">Department Code</label>
                    <div className="col-8">
                        <input id="code" name="code" placeholder="Department Code" key='code' value={this.state.put_data.code} onChange={this.handleChange} type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="short" className="col-4 col-form-label">Short Name</label>
                    <div className="col-8">
                        <input id="short" name="short" placeholder="Short Name" key='short' value={this.state.put_data.short} onChange={this.handleChange} type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" type="submit" onClick={this.Update} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

