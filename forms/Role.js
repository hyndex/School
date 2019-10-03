import React from 'react'
import Select from '../endpoints/select'


const RoleForm = () => {
    return (
        <div>
            <div className="form-group row">
                <label for="role" className="col-4 col-form-label">Add Staff Type</label>
                <div className="col-8">
                    <input id="role" name="role" placeholder="Role" type="text" required="required" className="form-control" />
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

export default RoleForm