import React from 'react'

const StaffForm = () => {
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
                <label for="Qualification" className="col-3 col-form-label">Qualification</label>
                <div className="col-9">
                    <input id="Qualification" name="Qualification" placeholder="Qualification" type="text" className="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="Stafftype" class="col-4 col-form-label">Staff Type</label>
                <div class="col-8">
                    {Select('Role', 'Role', 'required')}
                </div>
            </div>
            <div className="form-group row">
                <label for="Qualification" className="col-3 col-form-label">Qualification</label>
                <div className="col-9">
                    <input id="Qualification" name="Qualification" placeholder="Qualification." type="text" required="required" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label for="staffid" className="col-3 col-form-label">Staff Id.</label>
                <div className="col-9">
                    <input id="staffid" name="staffid" placeholder="Staff Id." type="text" required="required" className="form-control" />
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

export default StaffForm