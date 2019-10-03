import React from 'react'
import Select from '../endpoints/select'


const ExamBrowserFrom = () => {
    return (
        <div>
            <div className="form-group row">
                <label for="examname" className="col-4 col-form-label">Exam Name</label>
                <div className="col-8">
                    <select id="examname" name="examname" className="custom-select" required="required">
                        <option value="rabbit">Rabbit</option>
                        <option value="fish">Fish</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label for="examtype" className="col-4 col-form-label">Exam type</label>
                <div className="col-8">
                    {Select('ExamType', 'ExamType', 'required')}
                </div>
            </div>
            <div className="form-group row">
                <label for="class" className="col-4 col-form-label">Class</label>
                <div className="col-8">
                    {Select('Class', 'Class', 'required')}
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

export default ExamBrowserFrom