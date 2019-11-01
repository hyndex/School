import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            post_data:
            {
                code: '',
                name: '',
                subjecttype: '',
                semester: '',
                department: '',

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
        fetch('http://' + SERVER_URL + '/api/subject/', {
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
                    <label htmlFor="Subject Type" class="col-4 col-form-label">Subject Type</label>
                    <div class="col-8">
                        <select id="subjecttype" name="subjecttype" key='subjecttype' onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.subjecttype}
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="semester" class="col-4 col-form-label">semester</label>
                    <div class="col-8">
                        <select id="semester" name="semester" key='semester' onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.semester}
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="department" class="col-4 col-form-label">Department</label>
                    <div class="col-8">
                        <select id="department" name="department" key='department' onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.department}
                        </select>
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
                code: '',
                name: '',
                subjecttype: '',
                semester: '',
                department: '',

            },
        }
        this.Delete = this.Delete.bind(this)
        this.Update = this.Update.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/subject/' + this.props.select._id + '/', {
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
        fetch('http://' + SERVER_URL + '/api/subject/' + this.props.select._id, {
            method: 'DELETE',
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
                <div>
                    <button name="Delete" type="submit" onClick={this.Delete} className="btn btn-danger">Delete</button>
                </div>
                <div className="form-group row">
                    <label htmlFor="code" className="col-4 col-form-label">Code</label>
                    <div className="col-8">
                        <input id="code" name="code" key='code'  placeholder={this.props.select.code} onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-4 col-form-label">Name</label>
                    <div className="col-8">
                        <input id="name" name="name" key='name'  placeholder={this.props.select.name} onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="subjecttype" class="col-4 col-form-label">Subject Type</label>
                    <div class="col-8">
                        <select id="subjecttype" name="subjecttype" key='subjecttype' placeholder={this.props.select.subjecttype} onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.subjecttype}
                        </select>
                    </div>
                </div>
				<div class="form-group row">
                    <label htmlFor="semester" class="col-4 col-form-label">semester</label>
                    <div class="col-8">
                        <select id="semester" name="semester" key='semester' onChange={this.handleChange} className="custom-select" placeholder={this.props.select.semester} required="required">
                            {this.props.option.semester}
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="department" class="col-4 col-form-label">Department</label>
                    <div class="col-8">
                        <select id="department" name="department" key='department' onChange={this.handleChange} placeholder={this.props.select.department}
						className="custom-select" required="required">
                            {this.props.option.department}
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
