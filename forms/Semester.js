import React from 'react'
import Select from '../endpoints/select'


export default class SemesterForm extends React.Component {
    constructor() {
        super()
        this.state = {
            pre_load: {
                year: '',
            },
            post_data:
            {
                year: '',
                semester: '',

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
        fetch('http://' + SERVER_URL + '/semester/', {
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
                    <label htmlFor="Semester" className="col-4 col-form-label">Semester</label>
                    <div className="col-8">
                        <input id="semester" name="semester" key ='semester' placeholder="Semester" onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="Year" class="col-4 col-form-label">Year</label>
                    <div class="col-8">
                        <select id="year" name="year" key='year' onChange={this.handleChange} className="custom-select" required="required">
                        {Select('year')}
                        </select>
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
}

export default SemesterForm