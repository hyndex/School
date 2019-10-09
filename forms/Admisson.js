import React from 'react'
import Select from '../endpoints/select'

export default class AdmissionForm extends React.Component {
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
        address: '',
        address_post: '',
        address_city: '',
        address_state: '',
        address_country: '',
        address_pincode: '',
        address_mobile: '',
        name: '',
        gender: '',
        fatherName: '',
        dob: Date,
        sslcMark: '',
        hscMark: '',
        community: '',
        admissionNumber: '',
        registerNumber: '',
        rollNum: '',
        category_id: '',
        aadharNum: '',
        religion: '',
        batch_id: '',
        dept_id: '',
        userAccount_id: ''
      },
    }
    this.handleChange=this.handleChange.bind(this)
  }
  // async componentDidMount() {
  //     await fetch('http://'+SERVER_URL+'/batch/', {
  //         method: 'GET',
  //         headers: {
  //             "Content-type": "application/x-www-form-urlencoded",
  //             'Accept': 'application/json',
  //         }
  //     })
  //         .then(response => response.json())
  //         .then(data => this.setState({
  //             pre_load: {
  //                batch:data
  //              }
  //         }))
  //     await fetch('http://'+SERVER_URL+'/category/', {
  //         method: 'GET',
  //         headers: {
  //             "Content-type": "application/x-www-form-urlencoded",
  //             'Accept': 'application/json',
  //         }
  //     })
  //         .then(response => response.json())
  //         .then(data => this.setState({
  //             pre_load: {
  //                category:data
  //              }
  //         }))
  //     await fetch('http://'+SERVER_URL+'/depertment/', {
  //         method: 'GET',
  //         headers: {
  //             "Content-type": "application/x-www-form-urlencoded",
  //             'Accept': 'application/json',
  //         }
  //     })
  //         .then(response => response.json())
  //         .then(data => this.setState({
  //             pre_load: {
  //                depertment:data
  //              }
  //         }))
  // }
  Create = () => {
    const data = {
      name: this.state.post_data.name,
      client_id: this.state.post_data.client,
    }
    console.log(JSON.stringify(data))
    fetch('http://'+SERVER_URL+'/depertment/', {
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
  handleChange(e) {
    const { post_data } = { ...this.state };
    const currentState = post_data;
    const { name, value } = e.target;
    currentState[name] = value;

    this.setState({ post_data: currentState })

    console.log('POST STATE=>', this.state.post_data)
  }
  post_form = ()=>{
    return(
      <div>
      <div className="form-group row">
          <label htmlFor="name" className="col-3 col-form-label">Name</label>
          <div className="col-9">
            <input id="name" name="name" key="name" onChange={this.handleChange} placeholder="Name" type="text" className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="DOB" className="col-3 col-form-label">Date of Birth</label>
          <div className="col-9">
            <input id="dob" name="dob" key='dob' onChange={this.handleChange} type="text" className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3">Gender</label>
          <div className="col-9">
            <div className="form-check form-check-inline">
              <input name="gender" id="radio_0" type="radio" key='gender' onChange={this.handleChange} className="form-check-input" value="male" required="required" />
              <label htmlFor="radio_0" className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input name="gender" id="radio_1" key='gender' type="radio" onChange={this.handleChange} className="form-check-input" value="female" required="required" />
              <label htmlFor="radio_1" className="form-check-label">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input name="gender" id="radio_2" type="radio" key='gender' onChange={this.handleChange} className="form-check-input" value="others" required="required" />
              <label htmlFor="radio_2" className="form-check-label">Others</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-3 col-form-label">Address.</label>
          <div className="col-9">
            <input id="address" name="address" key='address' onChange={this.handleChange} placeholder="Address" type="text" className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="pin" className="col-3 col-form-label">PIN Code</label>
          <div className="col-9">
            <input id="address_pincode" name="address_pincode" onChange={this.handleChange} key='address_pincode' placeholder="PIN Code" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-3 col-form-label">Phone</label>
          <div className="col-9">
            <input id="address_mobile" name="address_mobile" onChange={this.handleChange} key='address_mobile' placeholder="Phone Number" type="text" className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="aadhar" className="col-3 col-form-label">Aadhar</label>
          <div className="col-9">
            <input id="aadharNum" name="aadharNum" key='aadharNum' onChange={this.handleChange} placeholder="Aadhar" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="sslc" className="col-3 col-form-label">SSLC Mark</label>
          <div className="col-9">
            <input id="sslcMark" name="sslcMark" key='sslcMark' onChange={this.handleChange} placeholder="SSLC Mark" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="hsc" className="col-3 col-form-label">HSC Mark</label>
          <div className="col-9">
            <input id="hscMark" name="hscMark" key='hscMark' onChange={this.handleChange} placeholder="HSC Mark" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="community" className="col-3 col-form-label">Community</label>
          <div className="col-9">
            <input id="community" name="community" key='community' onChange={this.handleChange} placeholder="community" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="admission" className="col-3 col-form-label">Admission No.</label>
          <div className="col-9">
            <input id="admissionNumber" name="admissionNumber" key='admissionNumber' onChange={this.handleChange} placeholder="Admission No." type="text" className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Category" className="col-4 col-form-label">Category</label>
          <div className="col-8">
            <select id='category_id' name='category_id' key='category_id' onChange={this.handleChange} required='required' className="custom-select">
              <option value="rabbit">Rabbit</option>
              <option value="rabbit1">Rabbit</option>
              <option value="rabbit2">Rabbit</option>
              <option value="rabbit3">Rabbit</option>
              <option value="rabbit4">Rabbit</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Batch" className="col-4 col-form-label">Batch</label>
          <div className="col-8">
            <select id='batch_id' name='batch_id' key='batch_id' onChange={this.handleChange} required='required' className="custom-select">
              <option value="rabbit">Rabbit</option>
              <option value="rabbit1">Rabbit</option>
              <option value="rabbit2">Rabbit</option>
              <option value="rabbit3">Rabbit</option>
              <option value="rabbit4">Rabbit</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Department" className="col-4 col-form-label">Department</label>
          <div className="col-8">
            <select id='dept_id' name='dept_id' key='dept_id' onChange={this.handleChange} required='required' className="custom-select">
              <option value="rabbit">Rabbit</option>
              <option value="rabbit1">Rabbit</option>
              <option value="rabbit2">Rabbit</option>
              <option value="rabbit3">Rabbit</option>
              <option value="rabbit4">Rabbit</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="register" className="col-3 col-form-label">Register No.</label>
          <div className="col-9">
            <input id="registerNumber" name="registerNumber" key='registerNumber' onChange={this.handleChange} placeholder="Register No." type="text" className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="roll" className="col-3 col-form-label">Roll No.</label>
          <div className="col-9">
            <input id="rollNum" name="rollNum" key='rollNum' onChange={this.handleChange} placeholder="Roll No." type="text" className="form-control" />
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
  render() {
    return (
      <div>
        {this.post_form()}
      </div>
    )
  }
}
