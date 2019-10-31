import React from 'react'
import Select from '../endpoints/select'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            post_data:
            {
                day: '',
                hour: '',
                class: '',
                subject: '',

            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.Create = this.Create.bind(this)

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
        fetch('http://' + SERVER_URL + '/api/timetable/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state.post_data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 201) ? window.location.reload() : alert('Not Successful'))
    }
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="day" className="col-4 col-form-label">day</label>
                    <div className="col-8">
                        <input id="day" name="day" key='day' placeholder="day" onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="hour" className="col-4 col-form-label">hour</label>
                    <div className="col-8">
                        <input id="hour" name="hour" key='hour' placeholder="hour" onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="class" class="col-4 col-form-label">class</label>
                    <div class="col-8">
                        <select id="class" name="class" key='class' onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.class}
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="subject" class="col-4 col-form-label">subject</label>
                    <div class="col-8">
                        <select id="subject" name="subject" key='subject' onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.subject}
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


export class PutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            put_data:
            {
                day: '',
                hour: '',
                class: '',
                subject: '',
            },
        }
        this.Delete = this.Delete.bind(this)
        this.Update = this.Update.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    Update = (e) => {
        e.preventDefault()
        fetch('http://' + SERVER_URL + '/api/timetable/' + this.props.select._id + '/', {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state.put_data),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 201) ? window.location.reload() : alert('You can not update a sample'))
    }
    Delete(e) {
        fetch('http://' + SERVER_URL + '/api/timetable/' + this.props.select._id, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(response => response.status)
            .then(async (data) => await (data == 202) ? window.location.reload() : alert('Not Successful'))
    }
    handleChange(e) {
        const { put_data } = { ...this.state };
        const currentState = put_data;
        const { name, value } = e.target;
        currentState[name] = value;

        this.setState({ put_data: currentState })

        console.log('PUT STATE=>', this.state.put_data)
    }
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="day" className="col-4 col-form-label">day</label>
                    <div className="col-8">
                        <input id="day" name="day" placeholder={this.props.select.day} key='day' placeholder="day" onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="hour" className="col-4 col-form-label">hour</label>
                    <div className="col-8">
                        <input id="hour" name="hour" key='hour' placeholder={this.props.select.hour} placeholder="hour" onChange={this.handleChange} type="text" required="required" className="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="class" class="col-4 col-form-label">class</label>
                    <div class="col-8">
                        <select id="class" name="class" key='class' placeholder={this.props.select.class} onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.class}
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="subject" class="col-4 col-form-label">subject</label>
                    <div class="col-8">
                        <select id="subject" name="subject" key='subject' placeholder={this.props.select.subject} onChange={this.handleChange} className="custom-select" required="required">
                            {this.props.option.subject}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" type="submit" onClick={this.Update} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>

        )
    }
}
