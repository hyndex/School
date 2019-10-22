import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'

export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            pre_load: {
                batch: '',
                category: '',
                depertment: ''
            },
            post_data:
            {
                batch: '',
                semister: '',
                department: '',
                category: '',
                ClassIC: '',
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
        fetch('http://' + SERVER_URL + '/api/depertmentallocation/', {
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
                    <label htmlFor="Batch" className="col-4 col-form-label">Batch</label>
                    <div className="col-8">
                        <select id='batch' name='batch' key='batch' onChange={this.handleChange} required='required' className="custom-select">
                            {Select('batch')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Department" className="col-4 col-form-label">Department</label>
                    <div className="col-8">
                        <select id='department' name='department' key='department' onChange={this.handleChange} required='required' className="custom-select">
                            {Select('department')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="category" className="col-4 col-form-label">category</label>
                    <div className="col-8">

                        <select id='category' name='category' key='category' onChange={this.handleChange} required='required' className="custom-select">
                            {Select('category')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ClassI/C" className="col-4 col-form-label">ClassI/C</label>
                    <div className="col-8">
                        <select id='ClassIC' name='ClassIC' key='ClassIC' onChange={this.handleChange} required='required' className="custom-select">
                            {Select('classic')}
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

/////////////////////////////////////////////////
// Update
/////////////////////////////////////////////////


export class PutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id:'',
            pre_load: {
                batch: '',
                category: '',
                depertment: ''
            },
            put_data:
            {
                batch: '',
                semister: '',
                department: '',
                category: '',
                classic: '',
            },
        }
        this.handleChange = this.handleChange.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/departmentallocation/' + this.state.id + '/', {
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
        fetch('http://' + SERVER_URL + '/api/departmentallocation/' + this.state.id, {
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
                    <label htmlFor="Batch" className="col-4 col-form-label">Batch</label>
                    <div className="col-8">
                        <select id='batch' name='batch' key='batch' value={this.state.put_data.batch} onChange={this.handleChange} required='required' className="custom-select">
                            {Select('batch')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Department" className="col-4 col-form-label">Department</label>
                    <div className="col-8">
                        <select id='department' name='department' key='department' value={this.state.put_data.department} onChange={this.handleChange} required='required' className="custom-select">
                            {Select('department')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="category" className="col-4 col-form-label">category</label>
                    <div className="col-8">

                        <select id='category' name='category' key='category' value={this.state.put_data.category} onChange={this.handleChange} required='required' className="custom-select">
                            {Select('category')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ClassI/C" className="col-4 col-form-label">ClassI/C</label>
                    <div className="col-8">
                        <select id='classic' name='classic' key='classic' value={this.state.put_data.classic} onChange={this.handleChange} required='required' className="custom-select">
                            {Select('classic')}
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

