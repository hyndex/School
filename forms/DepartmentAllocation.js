import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'



export default class DepartmentAllocationFrom extends React.Component {
    constructor() {
        super()
        this.state = {
            pre_load: {
                batch: '',
                category: '',
                depertment: ''
            },
            post_data:
            {
                Batch_id: '',
                Semister_id: '',
                Department_id: '',
                Category_id: '',
                ClassIC: '',
            },
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { post_data } = { ...this.state };
        const currentState = post_data;
        const { name, value } = e.target;
        currentState[name] = value;

        this.setState({ post_data: currentState })

        console.log('POST STATE=>', this.state.post_data)
    }
    Create = () => {
        const data = {
            name: this.state.post_data.name,
            client_id: this.state.post_data.client,
        }
        console.log(JSON.stringify(data))
        fetch('http://' + SERVER_URL + '/depertment/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 200) ? alert('Successful') : alert('Not Successful'))
    }
    render() {
        return (
            <div>
                
                <div className="form-group row">
                    <label htmlFor="Batch" className="col-4 col-form-label">Batch</label>
                    <div className="col-8">
                        <select id='Batch_id' name='Batch_id' key='Batch_id' onChange={this.handleChange} required='required' className="custom-select">
                            <option value="rabbit">Rabbit</option>
                            <option value="rabbit1">Rabbit</option>
                            <option value="rabbit2">Rabbit</option>
                            <option value="rabbit3">Rabbit</option>
                            <option value="rabbit4">Rabbit</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Department" className="col-4 col-form-label">Department</label>
                    <div className="col-8">
                        <select id='Department_id' name='Department_id' key='Department_id' onChange={this.handleChange} required='required' className="custom-select">
                            <option value="rabbit">Rabbit</option>
                            <option value="rabbit1">Rabbit</option>
                            <option value="rabbit2">Rabbit</option>
                            <option value="rabbit3">Rabbit</option>
                            <option value="rabbit4">Rabbit</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Department" className="col-4 col-form-label">Department</label>
                    <div className="col-8">
                        <select id='Department_id' name='Department_id' key='Department_id' onChange={this.handleChange} required='required' className="custom-select">
                            <option value="rabbit">Rabbit</option>
                            <option value="rabbit1">Rabbit</option>
                            <option value="rabbit2">Rabbit</option>
                            <option value="rabbit3">Rabbit</option>
                            <option value="rabbit4">Rabbit</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Category" className="col-4 col-form-label">Category</label>
                    <div className="col-8">

                        <select id='Category_id' name='Category_id' key='Category_id' onChange={this.handleChange} required='required' className="custom-select">
                            <option value="rabbit">Rabbit</option>
                            <option value="rabbit1">Rabbit</option>
                            <option value="rabbit2">Rabbit</option>
                            <option value="rabbit3">Rabbit</option>
                            <option value="rabbit4">Rabbit</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ClassI/C" className="col-4 col-form-label">ClassI/C</label>
                    <div className="col-8">
                        <select id='ClassIC' name='ClassIC' key='ClassIC' onChange={this.handleChange} required='required' className="custom-select">
                            <option value="rabbit">Rabbit</option>
                            <option value="rabbit1">Rabbit</option>
                            <option value="rabbit2">Rabbit</option>
                            <option value="rabbit3">Rabbit</option>
                            <option value="rabbit4">Rabbit</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" type="submit" onClick={this.Create} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
