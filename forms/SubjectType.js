import React from 'react'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            post_data:
            {
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
        fetch('http://' + SERVER_URL + '/api/subjecttype/', {
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
    componentDidMount(){
        this.setState({id:this.props.select._id})
      }
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlfor="subtype" className="col-4 col-form-label">Add Subject Type</label>
                    <div className="col-8">
                        <input id="subjecttype" name="subjecttype" onChange={this.handleChange} key='subjecttype' placeholder="Add Subject Type" type="text" required="required" className="form-control" />
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

export default class PutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            put_data:
            {
                subjecttype: '',
            },
        }
        this.handleChange = this.handleChange.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/subjecttype/' + this.state.id + '/', {
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
        fetch('http://' + SERVER_URL + '/api/subjecttype/' + this.state.id, {
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
                <div>
                    <button name="Delete" type="submit" onClick={this.Delete} className="btn btn-danger">Delete</button>
                </div>
                <div className="form-group row">
                    <label htmlfor="subtype" className="col-4 col-form-label">Add Subject Type</label>
                    <div className="col-8">
                        <input id="subjecttype" name="subjecttype" value={this.state.put_data.subjecttype} onChange={this.handleChange} key='subjecttype' placeholder="Add Subject Type" type="text" required="required" className="form-control" />
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

