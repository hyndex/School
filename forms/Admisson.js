import React from 'react'
import Select from '../endpoints/select'

const AdmissionForm = () => {
  return (
    <form>
      <div className="form-group row">
        <label for="name" className="col-3 col-form-label">Name</label>
        <div className="col-9">
          <input id="name" name="name" placeholder="Name" type="text" className="form-control" required="required" />
        </div>
      </div>
      <div className="form-group row">
        <label for="DOB" className="col-3 col-form-label">Date of Birth</label>
        <div className="col-9">
          <input id="DOB" name="DOB" type="text" className="form-control" required="required" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-3">Gender</label>
        <div className="col-9">
          <div className="form-check form-check-inline">
            <input name="radio" id="radio_0" type="radio" className="form-check-input" value="male" required="required" />
            <label for="radio_0" className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input name="radio" id="radio_1" type="radio" className="form-check-input" value="female" required="required" />
            <label for="radio_1" className="form-check-label">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input name="radio" id="radio_2" type="radio" className="form-check-input" value="others" required="required" />
            <label for="radio_2" className="form-check-label">Others</label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label for="address" className="col-3 col-form-label">Address</label>
        <div className="col-9">
          <input id="address" name="address" placeholder="Address" type="text" className="form-control" required="required" />
        </div>
      </div>
      <div className="form-group row">
        <label for="pin" className="col-3 col-form-label">PIN Code</label>
        <div className="col-9">
          <input id="pin" name="pin" placeholder="PIN Code" type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label for="phone" className="col-3 col-form-label">Phone</label>
        <div className="col-9">
          <input id="phone" name="phone" placeholder="Phone Number" type="text" className="form-control" required="required" />
        </div>
      </div>
      <div className="form-group row">
        <label for="email" className="col-3 col-form-label">Email</label>
        <div className="col-9">
          <input id="email" name="email" placeholder="Email" type="text" className="form-control" required="required" />
        </div>
      </div>
      <div className="form-group row">
        <label for="aadhar" className="col-3 col-form-label">Aadhar</label>
        <div className="col-9">
          <input id="aadhar" name="aadhar" placeholder="Aadhar" type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label for="sslc" className="col-3 col-form-label">SSLC Mark</label>
        <div className="col-9">
          <input id="sslc" name="sslc" placeholder="SSLC Mark" type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label for="hsc" className="col-3 col-form-label">HSC Mark</label>
        <div className="col-9">
          <input id="hsc" name="hsc" placeholder="HSC Mark" type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label for="admission" className="col-3 col-form-label">Admission No.</label>
        <div className="col-9">
          <input id="admission" name="admission" placeholder="Admission No." type="text" className="form-control" required="required" />
        </div>
      </div>
      <div class="form-group row">
        <label for="Category" class="col-4 col-form-label">Category</label>
        <div class="col-8">
          {Select('Category', 'Category', 'required')}
        </div>
      </div>
      <div class="form-group row">
        <label for="Batch" class="col-4 col-form-label">Batch</label>
        <div class="col-8">
          {Select('Batch', 'Batch', 'required')}
        </div>
      </div>
      <div class="form-group row">
        <label for="Department" class="col-4 col-form-label">Department</label>
        <div class="col-8">
          {Select('Department', 'Department', 'required')}
        </div>
      </div>
      <div className="form-group row">
        <label for="register" className="col-3 col-form-label">Register No.</label>
        <div className="col-9">
          <input id="register" name="register" placeholder="Register No." type="text" className="form-control" required="required" />
        </div>
      </div>
      <div className="form-group row">
        <label for="roll" className="col-3 col-form-label">Roll No.</label>
        <div className="col-9">
          <input id="roll" name="roll" placeholder="Roll No." type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-3 col-9">
          <button name="submit" type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  )
}
export default AdmissionForm

