import React from 'react'
import Select from '../endpoints/select'


const ExamTypeFrom = () => {
    return (
        <form>
            <div className="form-group row">
                <label for="examtype" className="col-4 col-form-label">Exam Type</label>
                <div className="col-8">
                    <input id="examtype" name="examtype" placeholder="Exam Type" type="text" required="required" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <div className="offset-4 col-8">
                    <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    )
}
export default ExamTypeFrom