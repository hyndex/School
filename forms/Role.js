import React from 'react'
import Select from '../endpoints/select'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            post_data:
            {
                stafftype: '',
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
        fetch('http://' + SERVER_URL + '/stafftype/', {
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
                    <label htmlFor="role" className="col-4 col-form-label">Add Staff Type</label>
                    <div className="col-8">
                        <input id="stafftype" name="stafftype" key='stafftype' onChange={this.handleChange} placeholder="Role" type="text" required="required" className="form-control" />
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
            id: '',
            put_data:
            {
                stafftype: '',
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
                    <label htmlFor="role" className="col-4 col-form-label">Add Staff Type</label>
                    <div className="col-8">
                        <input id="stafftype" name="stafftype" key='stafftype' onChange={this.handleChange} placeholder="Role" type="text" required="required" className="form-control" />
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

