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
                class: '',
                examtype: '',
                examname: '',
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
        fetch('http://' + SERVER_URL + '/api/exambrowser/', {
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
                    <label htmlFor="examname" className="col-4 col-form-label">Exam Name</label>
                    <div className="col-8">
                        <select id="examname" name="examname" key='examname' onChange={this.handleChange} className="custom-select" required="required">
                            {Select('examname')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="examtype" className="col-4 col-form-label">Exam type</label>
                    <div className="col-8">
                        <select id="examtype" name="examtype" key='examtype' onChange={this.handleChange} className="custom-select" required="required">
                            {Select('examtype')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="class" className="col-4 col-form-label">Class</label>
                    <div className="col-8">
                        <select id="class" name="class" key='class' onChange={this.handleChange} className="custom-select" required="required">
                            {Select('class')}
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
//////////////////////////////////////////////////
// Update
//////////////////////////////////////////////////

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
                class: '',
                examtype: '',
                examname: '',
            },
        }
        this.handleChange = this.handleChange.bind(this)
    }
    Update = (e) => {
        // e.preventDefault()
        const data = this.state.put_data
        console.log(JSON.stringify(data))
        fetch('http://' + SERVER_URL + '/api/admission/' + this.state.id + '/', {
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
        fetch('http://' + SERVER_URL + '/api/admission/' + this.state.id, {
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
                    <label htmlFor="examname" className="col-4 col-form-label">Exam Name</label>
                    <div className="col-8">
                        <select id="examname" name="examname" key='examname' value={this.state.put_data.examname} onChange={this.handleChange} className="custom-select" required="required">
                            {Select('examname')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="examtype" className="col-4 col-form-label">Exam type</label>
                    <div className="col-8">
                        <select id="examtype" name="examtype" key='examtype' value={this.state.put_data.examtype} onChange={this.handleChange} className="custom-select" required="required">
                            {Select('examtype')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="class" className="col-4 col-form-label">Class</label>
                    <div className="col-8">
                        <select id="class" name="class" key='class' value={this.state.put_data.class} onChange={this.handleChange} className="custom-select" required="required">
                            {Select('class')}
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

