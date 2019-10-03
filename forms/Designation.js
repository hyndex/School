import React from 'react'
import Select from '../endpoints/select'


const DesignationForm = () => {
    return (
        <div>
            <div className="form-group row">
                <label for="Designation" className="col-4 col-form-label">Designation</label>
                <div className="col-8">
                    <input id="Designation" name="Designation" placeholder="Designation" type="text" required="required" className="form-control" />
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
export default DesignationForm