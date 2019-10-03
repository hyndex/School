import React from 'react'
import Select from '../endpoints/select'

const DepartmentForm = () => {
    return (
        <div>
            <div className="form-group row">
                <label for="Department" className="col-4 col-form-label">Department Name</label>
                <div className="col-8">
                    <input id="Department" name="Department" placeholder="Department Name" type="text" className="form-control" required="required" />
                </div>
            </div>
            <div className="form-group row">
                <label for="code" className="col-4 col-form-label">Department Code</label>
                <div className="col-8">
                    <input id="code" name="code" placeholder="Department Code" type="text" className="form-control" required="required" />
                </div>
            </div>
            <div className="form-group row">
                <label for="short" className="col-4 col-form-label">Short Name</label>
                <div className="col-8">
                    <input id="short" name="short" placeholder="Short Name" type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-4"></label>
                <div className="col-8">
                    <div className="custom-control custom-checkbox custom-control-inline">
                        <input name="checkbox" id="checkbox_0" type="checkbox" className="custom-control-input" value="active" checked="checked" required="required" />
                        <label for="checkbox_0" className="custom-control-label">Active</label>
                    </div>
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

export default DepartmentForm