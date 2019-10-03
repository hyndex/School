import React from 'react'
import Select from '../endpoints/select'


const DepartmentAllocationFrom = () => {
    return (<form>
        <div class="form-group row">
            <label for="Batch" class="col-4 col-form-label">Batch</label>
            <div class="col-8">
                {Select('Batch', 'Batch', 'required')}
            </div>
        </div>
        <div class="form-group row">
            <label for="Semister" class="col-4 col-form-label">Semister</label>
            <div class="col-8">
                {Select('Semister', 'Semister', 'required')}
            </div>
        </div>
        <div class="form-group row">
            <label for="Department" class="col-4 col-form-label">Department</label>
            <div class="col-8">
                {Select('Department', 'Department', 'required')}
            </div>
        </div>
        <div class="form-group row">
            <label for="Category" class="col-4 col-form-label">Category</label>
            <div class="col-8">
                {Select('Category', 'Category', 'required')}
            </div>
        </div>
        <div class="form-group row">
            <label for="classic" class="col-4 col-form-label">Class I/C</label>
            <div class="col-8">
                {Select('ClassI/C', 'ClassI/C', 'required')}
            </div>
        </div>
        <div className="form-group row">
            <div className="offset-4 col-8">
                <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>)
}
export default DepartmentAllocationFrom