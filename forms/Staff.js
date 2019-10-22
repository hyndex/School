import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id:'',
            post_data:
            {
                role: '',
                name: '',
                dob: '',
                address: '',
                pin: '',
                phone: '',
                email: '',
                gender: '',
                qualification: '',
                aadhar: '',
                staffid: '',

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
        fetch('http://' + SERVER_URL + '/api/staff/', {
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
                    <label htmlfor="name" className="col-3 col-form-label">Name</label>
                    <div className="col-9">
                        <input id="name" name="name" key="name" onChange={this.handleChange} placeholder="Name" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="DOB" className="col-3 col-form-label">Date of Birth</label>
                    <div className="col-9">
                        <input id="dob" name="dob" key='dob' onChange={this.handleChange} type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">Gender</label>
                    <div className="col-9">
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_0" type="radio" key='gender' onChange={this.handleChange} className="form-check-input" value="male" required="required" />
                            <label htmlfor="radio_0" className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_1" type="radio" key='gender' onChange={this.handleChange} className="form-check-input" value="female" required="required" />
                            <label htmlfor="radio_1" className="form-check-label">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_2" type="radio" key='gender' onChange={this.handleChange} className="form-check-input" value="others" required="required" />
                            <label htmlfor="radio_2" className="form-check-label">Others</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">Address</label>
                    <div className="col-9">
                        <input id="address" name="address" key='address' onChange={this.handleChange} placeholder="Address" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="pin" className="col-3 col-form-label">PIN Code</label>
                    <div className="col-9">
                        <input id="pin" name="pin" key='pin' onChange={this.handleChange} placeholder="PIN Code" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="phone" className="col-3 col-form-label">Phone</label>
                    <div className="col-9">
                        <input id="phone" name="phone" key="phone" onChange={this.handleChange} placeholder="Phone Number" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="email" className="col-3 col-form-label">Email</label>
                    <div className="col-9">
                        <input id="email" name="email" key="email" onChange={this.handleChange} placeholder="Email" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="aadhar" className="col-3 col-form-label">Aadhar</label>
                    <div className="col-9">
                        <input id="aadhar" name="aadhar" key="aadhar" onChange={this.handleChange} placeholder="Aadhar" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="Qualification" className="col-3 col-form-label">Qualification</label>
                    <div className="col-9">
                        <input id="Qualification" name="Qualification" onChange={this.handleChange} key="qualification" placeholder="Qualification" type="text" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlfor="Stafftype" class="col-4 col-form-label">Staff Type</label>
                    <div class="col-8">
                        <select id='role' name='role' key='role' onChange={this.handleChange} required='required' className="custom-select">
                            {Select('role')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="staffid" className="col-3 col-form-label">Staff Id.</label>
                    <div className="col-9">
                        <input id="staffid" name="staffid" key="staffid" onChange={this.handleChange} placeholder="Staff Id." type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-3 col-9">
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
                role: '',
                name: '',
                dob: '',
                address: '',
                pin: '',
                phone: '',
                email: '',
                gender: '',
                qualification: '',
                aadhar: '',
                staffid: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/staff/' + this.state.id + '/', {
            method: 'PUT',
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
        fetch('http://' + SERVER_URL + '/api/staff/' + this.state.id, {
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
                    <label htmlfor="name" className="col-3 col-form-label">Name</label>
                    <div className="col-9">
                        <input id="name" name="name" key="name" value={this.state.put_data.name} onChange={this.handleChange} placeholder="Name" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="DOB" className="col-3 col-form-label">Date of Birth</label>
                    <div className="col-9">
                        <input id="dob" name="dob" key='dob' value={this.state.put_data.dob} onChange={this.handleChange} type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">Gender</label>
                    <div className="col-9">
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_0" type="radio" key='gender' value={this.state.put_data.gender} onChange={this.handleChange} className="form-check-input" value="male" required="required" />
                            <label htmlfor="radio_0" className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_1" type="radio" key='gender' value={this.state.put_data.gender} onChange={this.handleChange} className="form-check-input" value="female" required="required" />
                            <label htmlfor="radio_1" className="form-check-label">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_2" type="radio" key='gender' value={this.state.put_data.gender} onChange={this.handleChange} className="form-check-input" value="others" required="required" />
                            <label htmlfor="radio_2" className="form-check-label">Others</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">Address</label>
                    <div className="col-9">
                        <input id="address" name="address" key='address' value={this.state.put_data.address} onChange={this.handleChange} placeholder="Address" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="pin" className="col-3 col-form-label">PIN Code</label>
                    <div className="col-9">
                        <input id="pin" name="pin" key='pin' value={this.state.put_data.pin} onChange={this.handleChange} placeholder="PIN Code" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="phone" className="col-3 col-form-label">Phone</label>
                    <div className="col-9">
                        <input id="phone" name="phone" key="phone" value={this.state.put_data.phone} onChange={this.handleChange} placeholder="Phone Number" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="email" className="col-3 col-form-label">Email</label>
                    <div className="col-9">
                        <input id="email" name="email" key="email" value={this.state.put_data.email} onChange={this.handleChange} placeholder="Email" type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="aadhar" className="col-3 col-form-label">Aadhar</label>
                    <div className="col-9">
                        <input id="aadhar" name="aadhar" key="aadhar" value={this.state.put_data.aadhar} onChange={this.handleChange} placeholder="Aadhar" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="Qualification" className="col-3 col-form-label">Qualification</label>
                    <div className="col-9">
                        <input id="qualification" name="qualification" key='qualification' value={this.state.put_data.qualification} onChange={this.handleChange} key="qualification" placeholder="Qualification" type="text" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlfor="Stafftype" class="col-4 col-form-label">Staff Type</label>
                    <div class="col-8">
                        <select id='role' name='role' key='role' value={this.state.put_data.role} onChange={this.handleChange} required='required' className="custom-select">
                            {Select('role')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="staffid" className="col-3 col-form-label">Staff Id.</label>
                    <div className="col-9">
                        <input id="staffid" name="staffid" key="staffid" value={this.state.put_data.staffid} onChange={this.handleChange} placeholder="Staff Id." type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-3 col-9">
                        <button name="submit" type="submit" onClick={this.Update} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

