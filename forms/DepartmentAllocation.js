import React from 'react'
import Select from '../endpoints/select'


const DepartmentAllocationFrom = () => {
    return (
        <div>
            <div className="form-group row">
                <label htmlFor="Batch" className="col-4 col-form-label">Batch</label>
                <div className="col-8">
                    {Select('Batch', 'Batch', 'required')}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Semister" className="col-4 col-form-label">Semister</label>
                <div className="col-8">
                    {Select('Semister', 'Semister', 'required')}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Department" className="col-4 col-form-label">Department</label>
                <div className="col-8">
                    {Select('Department', 'Department', 'required')}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="Category" className="col-4 col-form-label">Category</label>
                <div className="col-8">
                    {Select('Category', 'Category', 'required')}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="ClassI/C" className="col-4 col-form-label">ClassI/C</label>
                <div className="col-8">
                    {Select('ClassI/C', 'ClassI/C', 'required')}
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
export default DepartmentAllocationFrom