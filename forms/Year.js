import React from 'react'

const YearForm = () => {
  return (
    <div>
      <div className="form-group row">
        <label for="year" className="col-4 col-form-label">Add Year</label>
        <div className="col-8">
          <input id="year" name="year" placeholder="Year" type="text" required="required" className="form-control" />
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

export default YearForm