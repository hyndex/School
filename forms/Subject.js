import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            pre_load: {
                subjecttype: '',
            },
            post_data:
            {
                code: '',
                name: '',
                subjecttype: '',

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
        fetch('http://' + SERVER_URL + '/api/semester/', {
            method: 'POST',
            credentials: 'include',
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
                    <label htmlFor="code" className="col-4 col-form-label">Code</label>
                    <div className="col-8">
                        <input id="code" name="code" key='code' placeholder="Code" onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-4 col-form-label">Name</label>
                    <div className="col-8">
                        <input id="name" name="name" key='name' placeholder="Name" onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="Year" class="col-4 col-form-label">Year</label>
                    <div class="col-8">
                        <select id="subjecttype" name="subjecttype" key='subjecttype' onChange={this.handleChange} className="custom-select" required="required">
                            {Select('subjecttype')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" type="submit" className="btn btn-primary">Submit</button>
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
            id:'',
            pre_load: {
                subjecttype: '',
            },
            put_data:
            {
                code: '',
                name: '',
                subjecttype: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
    }
    Update = (e) => {
        // e.preventDefault()
        const data = this.state.put_data
        console.log(JSON.stringify(data))
        fetch('http://' + SERVER_URL + '/api/subject/' + this.state.id + '/', {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 200) ? alert('Successful') : alert('You can not update a sample'))
    }
    Delete(e) {
        fetch('http://' + SERVER_URL + '/api/subject/' + this.state.id, {
            method: 'DELETE',
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
                    <label htmlFor="code" className="col-4 col-form-label">Code</label>
                    <div className="col-8">
                        <input id="code" name="code" key='code' placeholder="Code" value={this.state.put_data.code} onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-4 col-form-label">Name</label>
                    <div className="col-8">
                        <input id="name" name="name" key='name' placeholder="Name" value={this.state.put_data.name} onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="Year" class="col-4 col-form-label">Year</label>
                    <div class="col-8">
                        <select id="subjecttype" name="subjecttype" key='subjecttype' value={this.state.put_data.subjecttype} onChange={this.handleChange} className="custom-select" required="required">
                            {Select('subjecttype')}
                        </select>
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
