import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            post_data:
            {
                id: '',
                designation: '',
                name: '',
                dob: '',
                address: '',
                pin: '',
                phone: '',
                email: '',
                gender: '',
                dateOfJoining: '',
                qualification: '',
                aadhar: '',
				addressdoorNo: '',
				addressstreet: '',
				addresslandmark: '',
				addresspost:'',
				addresscity: '',
				addressstate: '',
				addresscountry: '',
				addresspincode: '',
				addressmobile1: '',
				addressmobile2: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Create = this.Create.bind(this)

    }
    componentDidMount() {
        this.setState({ id: this.props.select._id })
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
            .then(async (data) => await (data == 201) ? window.location.reload() : alert('Not Successful'))
    }
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlfor="name" className="col-3 col-form-label">Name</label>
                    <div className="col-9">
                        <input id="name" name="name" key="name" onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="DOB" className="col-3 col-form-label">Date of Birth</label>
                    <div className="col-9">
                        <input id="dob" name="dob" key='dob' onChange={this.handleChange} type="date" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="dateOfJoining" className="col-3 col-form-label">Date of Join</label>
                    <div className="col-9">
                        <input id="dateOfJoining" name="dateOfJoining" key='dateOfJoining' onChange={this.handleChange} type="date" className="form-control" required="required" />
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
                            <input name="gender" id="radio_1" type="radio" key='gender'  onChange={this.handleChange} className="form-check-input" value="female" required="required" />
                            <label htmlfor="radio_1" className="form-check-label">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_2" type="radio" key='gender' onChange={this.handleChange} className="form-check-input" value="others" required="required" />
                            <label htmlfor="radio_2" className="form-check-label">Others</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">doorNo</label>
                    <div className="col-9">
                        <input id="addressdoorNo" name="addressdoorNo" key='addressdoorNo'  onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">street</label>
                    <div className="col-9">
                        <input id="addressstreet" name="addressstreet" key='addressstreet' onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">landmark</label>
                    <div className="col-9">
                        <input id="addresslandmark" name="addresslandmark" key='addresslandmark'  onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">post</label>
                    <div className="col-9">
                        <input id="addresspost" name="addresspost" key='addresspost' onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addresscity" className="col-3 col-form-label">city</label>
                    <div className="col-9">
                        <input id="addresscity" name="addresscity" key='addresscity' onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addressstate" className="col-3 col-form-label">state</label>
                    <div className="col-9">
                        <input id="addressstate" name="addressstate" key='addressstate' onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addresscountry" className="col-3 col-form-label">country</label>
                    <div className="col-9">
                        <input id="addresscountry" name="addresscountry" key='addresscountry' onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addresspincode" className="col-3 col-form-label">pincode</label>
                    <div className="col-9">
                        <input id="addresspincode" name="addresspincode" key='addresspincode' onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addressmobile1" className="col-3 col-form-label">mobile 1</label>
                    <div className="col-9">
                        <input id="addressmobile1" name="addressmobile1" key='addressmobile1' onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addressmobile2" className="col-3 col-form-label">mobile 2</label>
                    <div className="col-9">
                        <input id="addressmobile2" name="addressmobile2" key='addressmobile2'  onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
                
                
      
				
				<div class="form-group row">
                    <label htmlfor="Stafftype" class="col-4 col-form-label">Staff Type</label>
                    <div class="col-8">
                        <select id='designation' name='designation' key='designation' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.designation}
                        </select>
                    </div>
                </div>
				<div class="form-group row">
                    <label htmlfor="userAccount" class="col-4 col-form-label">Account</label>
                    <div class="col-8">
                        <select id='userAccount' name='userAccount' key='userAccount' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.userAccount}
                        </select>
                    </div>
                </div>
				<div class="form-group row">
                    <label htmlfor="Stafftype" class="col-4 col-form-label">Staff Type</label>
                    <div class="col-8">
                        <select id='staffType' name='staffType' key='staffType' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.stafftype}
                        </select>
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
                id: '',
                designation: '',
                name: '',
                dob: '',
                address: '',
                pin: '',
                phone: '',
                email: '',
                gender: '',
                dateOfJoining: '',
                qualification: '',
                aadhar: '',
				addressdoorNo: '',
				addressstreet: '',
				addresslandmark: '',
				addresspost:'',
				addresscity: '',
				addressstate: '',
				addresscountry: '',
				addresspincode: '',
				addressmobile1: '',
				addressmobile2: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Delete = this.Delete.bind(this)
        this.Update = this.Update.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/staff/' + this.props.select._id + '/', {
            method: 'PUT',
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
        fetch('http://' + SERVER_URL + '/api/staff/' + this.props.select._id, {
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
                    <label htmlfor="name" className="col-3 col-form-label">Name</label>
                    <div className="col-9">
                        <input id="name" name="name" key="name" placeholder={this.props.select.name} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="DOB" className="col-3 col-form-label">Date of Birth</label>
                    <div className="col-9">
                        <input id="dob" name="dob" key='dob' placeholder={this.props.select.dob} onChange={this.handleChange} type="date" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="dateOfJoining" className="col-3 col-form-label">Date of Join</label>
                    <div className="col-9">
                        <input id="dateOfJoining" name="dateOfJoining" key='dateOfJoining' placeholder={this.props.select.dateOfJoining} onChange={this.handleChange} type="date" className="form-control" required="required" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3">Gender</label>
                    <div className="col-9">
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_0" type="radio" key='gender' placeholder={this.props.select.gender} onChange={this.handleChange} className="form-check-input" value="male" required="required" />
                            <label htmlfor="radio_0" className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_1" type="radio" key='gender' placeholder={this.props.select.gender} onChange={this.handleChange} className="form-check-input" value="female" required="required" />
                            <label htmlfor="radio_1" className="form-check-label">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input name="gender" id="radio_2" type="radio" key='gender' placeholder={this.props.select.gender} onChange={this.handleChange} className="form-check-input" value="others" required="required" />
                            <label htmlfor="radio_2" className="form-check-label">Others</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">doorNo</label>
                    <div className="col-9">
                        <input id="addressdoorNo" name="addressdoorNo" key='addressdoorNo' placeholder={this.props.select.addressdoorNo} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">street</label>
                    <div className="col-9">
                        <input id="addressstreet" name="addressstreet" key='addressstreet' placeholder={this.props.select.addressstreet} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">landmark</label>
                    <div className="col-9">
                        <input id="addresslandmark" name="addresslandmark" key='addresslandmark' placeholder={this.props.select.addresslandmark} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="address" className="col-3 col-form-label">post</label>
                    <div className="col-9">
                        <input id="addresspost" name="addresspost" key='addresspost' placeholder={this.props.select.addresspost} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addresscity" className="col-3 col-form-label">city</label>
                    <div className="col-9">
                        <input id="addresscity" name="addresscity" key='addresscity' placeholder={this.props.select.addresscity} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addressstate" className="col-3 col-form-label">state</label>
                    <div className="col-9">
                        <input id="addressstate" name="addressstate" key='addressstate' placeholder={this.props.select.addressstate} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addresscountry" className="col-3 col-form-label">country</label>
                    <div className="col-9">
                        <input id="addresscountry" name="addresscountry" key='addresscountry' placeholder={this.props.select.addresscountry} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addresspincode" className="col-3 col-form-label">pincode</label>
                    <div className="col-9">
                        <input id="addresspincode" name="addresspincode" key='addresspincode' placeholder={this.props.select.addresspincode} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addressmobile1" className="col-3 col-form-label">mobile 1</label>
                    <div className="col-9">
                        <input id="addressmobile1" name="addressmobile1" key='addressmobile1' placeholder={this.props.select.addressmobile1} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
				<div className="form-group row">
                    <label htmlfor="addressmobile2" className="col-3 col-form-label">mobile 2</label>
                    <div className="col-9">
                        <input id="addressmobile2" name="addressmobile2" key='addressmobile2' placeholder={this.props.select.addressmobile2} onChange={this.handleChange}  type="text" className="form-control" required="required" />
                    </div>
                </div>
                
                
      
				
				<div class="form-group row">
                    <label htmlfor="Stafftype" class="col-4 col-form-label">Staff Type</label>
                    <div class="col-8">
                        <select id='designation' name='designation' key='designation' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.designation}
                        </select>
                    </div>
                </div>
				<div class="form-group row">
                    <label htmlfor="userAccount" class="col-4 col-form-label">Account</label>
                    <div class="col-8">
                        <select id='userAccount' name='userAccount' key='userAccount' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.userAccount}
                        </select>
                    </div>
                </div>
				<div class="form-group row">
                    <label htmlfor="Stafftype" class="col-4 col-form-label">Staff Type</label>
                    <div class="col-8">
                        <select id='staffType' name='staffType' key='staffType' onChange={this.handleChange} required='required' className="custom-select">
                            {this.props.option.stafftype}
                        </select>
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

