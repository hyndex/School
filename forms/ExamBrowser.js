import React from 'react'
import Select from '../endpoints/select'


export default class ExamBrowserFrom extends React.Component {
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
                class: '',
                examtype: '',
                examname: '',
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
        fetch('http://' + SERVER_URL + '/exambrowser/', {
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
                    <label htmlFor="examname" className="col-4 col-form-label">Exam Name</label>
                    <div className="col-8">
                        <select id="examname" name="examname" key='examname' onChange={this.handleChange} className="custom-select" required="required">
                        {Select('examname')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="examtype" className="col-4 col-form-label">Exam type</label>
                    <div className="col-8">
                        <select id="examtype" name="examtype" key='examtype' onChange={this.handleChange} className="custom-select" required="required">
                        {Select('examtype')}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="class" className="col-4 col-form-label">Class</label>
                    <div className="col-8">
                        <select id="class" name="class" key='class' onChange={this.handleChange} className="custom-select" required="required">
                        {Select('class')}
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

