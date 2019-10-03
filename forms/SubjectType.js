import React from 'react'

const StaffForm = ()=>{
return (
    <form>
    <div className="form-group row">
        <label for="subtype" className="col-4 col-form-label">Add Subject Type</label> 
        <div className="col-8">
        <input id="subtype" name="subtype" placeholder="Add Subject Type" type="text" required="required" className="form-control"/>
        </div>
    </div> 
    <div className="form-group row">
        <div className="offset-4 col-8">
        <button name="submit" type="submit" className="btn btn-primary">Submit</button>
        </div>
    </div>
    </form>
)}

export default StaffForm