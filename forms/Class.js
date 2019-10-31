import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'

export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            post_data:
            {
                batch: '',
                semister: '',
                department: '',
                category: '',
				staff:'',
				classname:'',
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
        fetch('http://' + SERVER_URL + '/api/class/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state.post_data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 201) ? window.location.reload() : alert('Not Successful'))
    }
    render() {
        return (
            <div>

                <div className="form-group row">
                    <label htmlFor="Batch" className="col-4 col-form-label">Batch</label>
                    <div className="col-8">
                        <select id='batch' name='batch' key='batch' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.batch}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Department" className="col-4 col-form-label">Department</label>
                    <div className="col-8">
                        <select id='department' name='department' key='department' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.department}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="category" className="col-4 col-form-label">category</label>
                    <div className="col-8">

                        <select id='category' name='category' key='category' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.category}
                        </select>
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlFor="ClassI/C" className="col-4 col-form-label">ClassI/C</label>
                    <div className="col-8">
                        <select id='staff' name='staff' key='staff' placeholder='Class IC' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.staff}
                        </select>
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlFor="classname" className="col-4 col-form-label">Class</label>
                    <div className="col-8">
                        <input id="classname" name="classname" key='classname' onChange={this.handleChange} placeholder="classname" type="text" className="form-control" />
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

/////////////////////////////////////////////////
// Update
/////////////////////////////////////////////////


export class PutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            put_data:
            {
                batch: '',
                semister: '',
                department: '',
                category: '',
                staff: '',
				classname:'',
            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Delete = this.Delete.bind(this)
        this.Update = this.Update.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/class/' + this.props.select._id + '/', {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state.put_data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 201) ? window.location.reload() : alert('You can not update a sample'))
    }
    Delete(e) {
        fetch('http://' + SERVER_URL + '/api/class/' + this.props.select._id, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 202) ? window.location.reload() : alert('Not Successful'))
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
                    <label htmlFor="Batch" className="col-4 col-form-label">Batch</label>
                    <div className="col-8">
                        <select id='batch' name='batch' key='batch' placeholder={this.props.select.batch} onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.batch}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Department" className="col-4 col-form-label">Department</label>
                    <div className="col-8">
                        <select id='department' name='department' key='department' placeholder={this.props.select.department} onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.department}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="category" className="col-4 col-form-label">category</label>
                    <div className="col-8">

                        <select id='category' name='category' key='category' placeholder={this.props.select.category} onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.category}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ClassI/C" className="col-4 col-form-label">ClassI/C</label>
                    <div className="col-8">
                        <select id='staff' name='staff' key='staff' placeholder={this.props.select.staff} onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.staff}
                        </select>
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlFor="classname" className="col-4 col-form-label">Class</label>
                    <div className="col-8">
                        <input id="classname" name="classname" key='classname' onChange={this.handleChange} placeholder={this.props.select.classname} type="text" className="form-control" />
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

