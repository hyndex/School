import React from 'react'
import Select from '../endpoints/select'


const BatchForm = ()=>{
    return(<form>
        <div className="form-group row">
            <label for="start" className="col-4 col-form-label">Start Date</label> 
            <div className="col-8">
            <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fa fa-calendar-plus-o"></i>
                </div>
                </div> 
                <input id="start" name="start" placeholder="Start Date" type="text" className="form-control"/>
            </div>
            </div>
        </div>
        <div className="form-group row">
            <label for="end" className="col-4 col-form-label">End Date</label> 
            <div className="col-8">
            <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fa fa-calendar-times-o"></i>
                </div>
                </div> 
                <input id="end" name="end" placeholder="End Date" type="text" className="form-control"/>
            </div>
            </div>
        </div>
        <div className="form-group row">
            <label for="batch" className="col-4 col-form-label">Batch</label> 
            <div className="col-8">
            <input id="batch" name="batch" placeholder="Batch" type="text" className="form-control"/>
            </div>
        </div> 
        <div className="form-group row">
            <div className="offset-4 col-8">
            <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>)
}

export default BatchForm