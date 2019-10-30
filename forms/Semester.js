import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            pre_load: {
                year: '',
            },
            post_data:
            {
                year: '',
                semester: '',

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

        fetch('http://' + SERVER_URL + '/api/semester/', {
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
                    <label htmlFor="Semester" className="col-4 col-form-label">Semester</label>
                    <div className="col-8">
                        <input id="semester" name="semester" key='semester' placeholder="Semester" onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="Year" class="col-4 col-form-label">Year</label>
                    <div class="col-8">
                        <select id="year" name="year" key='year' onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.year}
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
            pre_load: {
                year: '',
            },
            post_data:
            {
                year: '',
                semester: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Delete = this.Delete.bind(this)
        this.Update = this.Update.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/semester/' + this.props.select._id + '/', {
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
        fetch('http://' + SERVER_URL + '/api/semester/' + this.props.select._id, {
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
                    <label htmlFor="Semester" className="col-4 col-form-label">Semester</label>
                    <div className="col-8">
                        <input id="semester" name="semester" key='semester' placeholder={this.state.put_data.semester}  onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="Year" class="col-4 col-form-label">Year</label>
                    <div class="col-8">
                        <select id="year" name="year" key='year' placeholder={this.state.put_data.year} onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.year}
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
