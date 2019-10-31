import React from 'react'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            post_data:
            {
                name: '',
                type: '',
                class: '',
                exam:{
					datetime:'',
					description:'',
					subject:'',
				},
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
        fetch('http://' + SERVER_URL + '/api/exam/', {
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
				  <label htmlFor="type" className="col-4 col-form-label">type</label>
				  <div className="col-8">
					<select id='type' name='type' key='type'onChange={this.handleChange} required='required' className="custom-select">
					  {this.props.option.examtype}
					</select>
				  </div>
				</div>
				<div className="form-group row">
				  <label htmlFor="name" className="col-4 col-form-label">name</label>
				  <div className="col-8">
					<select id='name' name='name' key='name' onChange={this.handleChange} required='required' className="custom-select">
					  {this.props.option.examname}
					</select>
				  </div>
				</div>
				<div className="form-group row">
				  <label htmlFor="class" className="col-4 col-form-label">name</label>
				  <div className="col-8">
					<select id='class' name='class' key='class' onChange={this.handleChange} required='required' className="custom-select">
					  {this.props.option.class}
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
            id: '',
            put_data:
            {
                name: '',
                type: '',
                class: '',
                exam:{
					datetime:'',
					description:'',
					subject:'',
				},
            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Delete = this.Delete.bind(this)
        this.Update = this.Update.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/exam/' + this.props.select._id + '/', {
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
        fetch('http://' + SERVER_URL + '/api/exam/' + this.props.select._id, {
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
				  <label htmlFor="type" className="col-4 col-form-label">type</label>
				  <div className="col-8">
					<select id='type' name='type' key='type' placeholder={this.props.select.type} onChange={this.handleChange} required='required' className="custom-select">
					  {this.props.option.examtype}
					</select>
				  </div>
				</div>
				<div className="form-group row">
				  <label htmlFor="name" className="col-4 col-form-label">name</label>
				  <div className="col-8">
					<select id='name' name='name' key='name' placeholder={this.props.select.name} onChange={this.handleChange} required='required' className="custom-select">
					  {this.props.option.examname}
					</select>
				  </div>
				</div>
				<div className="form-group row">
				  <label htmlFor="class" className="col-4 col-form-label">name</label>
				  <div className="col-8">
					<select id='class' name='class' key='class' placeholder={this.props.select.class} onChange={this.handleChange} required='required' className="custom-select">
					  {this.props.option.class}
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

