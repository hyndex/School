import React from 'react'
import Select from '../endpoints/select'


const SemesterForm = ()=>{
return (
    <div>
        <div className="form-group row">
            <label for="Semester" className="col-4 col-form-label">Semester</label> 
            <div className="col-8">
            <input id="Semester" name="Semester" placeholder="Semester" type="text" required="required" className="form-control"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="Year" class="col-4 col-form-label">Year</label>
            <div class="col-8">
                {Select('Year', 'Year', 'required')}
            </div>
        </div>
        <div className="form-group row">
            <div className="offset-4 col-8">
            <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>

)}

export default SemesterForm