import React from 'react'
import { Fragment } from 'react'
import SERVER_URL from '../endpoints/Server'


export class PostForm extends React.Component {
  constructor() {
    super()
    this.state = {
      post_data:
      {
        name: '',
        type: '',
        class: '',
        exam: [],
      },
      exam:[],
      questions: [],
      datetime:[],
      description:[],
    }
    this.handleChange = this.handleChange.bind(this)
    this.Create = this.Create.bind(this)
    this.handleText = this.handleText.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handledescription = this.handledescription.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
  }
  //////////////////////////////////////////////////////////////
  handleText = i => e => {
    let questions = [...this.state.questions]
    questions[i] = e.target.value
    this.setState({
      questions
    })
  }
  handleDate = i => e => {
    let datetime = [...this.state.datetime]
    datetime[i] = e.target.value
    this.setState({
      datetime
    })
  }
  handledescription = i => e => {
    let description = [...this.state.description]
    description[i] = e.target.value
    this.setState({
      description
    })
  }

  handleDelete = i => e => {
    e.preventDefault()
    let questions = [
      ...this.state.questions.slice(0, i),
      ...this.state.questions.slice(i + 1)
    ]
    this.setState({
      questions
    })
    let datetime = [
      ...this.state.datetime.slice(0, i),
      ...this.state.datetime.slice(i + 1)
    ]
    this.setState({
      datetime
    })
    let description = [
      ...this.state.description.slice(0, i),
      ...this.state.description.slice(i + 1)
    ]
    this.setState({
      description
    })
  }

  addQuestion = e => {
    e.preventDefault()
    let questions = this.state.questions.concat([''])
    this.setState({
      questions
    })
    let datetime = this.state.datetime.concat([''])
    this.setState({
      datetime
    })
    let description = this.state.description.concat([''])
    this.setState({
      description
    })
  }
  //////////////////////////////////////////////////////////////

  handleChange(e) {
    const { post_data } = { ...this.state };
    const currentState = post_data;
    const { name, value } = e.target;
    currentState[name] = value;

    this.setState({ post_data: currentState })

    console.log('POST STATE=>', this.state.post_data)
  }
  Create = () => {
    this.state.questions.map((question, index)=>{
      let exam = this.state.exam.concat([
        {
          datetime:this.state.datetime[index],
          description:this.state.description[index],
          subject:this.state.questions[index],
        }])
    })
    const { post_data } = { ...this.state };
    const currentState = post_data;
    currentState['exam'] = exam;
    this.setState({ post_data: currentState })
    
    fetch('http://' + SERVER_URL + '/api/exam/', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state.post_data),
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    })
      .then(response => response.status)
      .then(async (data) => await (data < 300) ? window.location.reload() : alert('Not Successful'))
  }
  render() {
    console.log('STATE =>',this.state)
    return (
      <div>
        <div className="form-group row">
          <label htmlFor="type" className="col-4 col-form-label">type</label>
          <div className="col-8">
            <select id='type' name='type' key='type' onChange={this.handleChange} required='required' className="custom-select">
              {this.props.option.examtype}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-4 col-form-label">name</label>
          <div className="col-8">
            <select id='name' name='name' key='name' onChange={this.handleChange} required='required' className="custom-select">
              {this.props.option.examname}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="class" className="col-4 col-form-label">name</label>
          <div className="col-8">
            <select id='class' name='class' key='class' onChange={this.handleChange} required='required' className="custom-select">
              {this.props.option.class}
            </select>
          </div>
        </div>
        <Fragment>
          {this.state.questions.map((question, index) => (
            <span key={index}>
              <div className="form-group row">
                <label htmlFor="student" className="col-4 col-form-label">subject</label>
                <div className="col-8">
                  <select id='subject' class="form-control selectpicker" data-live-search="true" name='subject' key='subject' onChange={this.handleText(index)} required='required' className="custom-select">
                    {this.props.option.subject}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                    <label htmlFor="datetime" className="col-4 col-form-label">Date</label>
                    <div className="col-8">
                        <input id="datetime" name="datetime" key='datetime' onChange={this.handleDate(index)}  placeholder="datetime" type="date" className="form-control" />
                    </div>
                </div>
              <div className="form-group row">
                    <label htmlFor="date" className="col-4 col-form-label">description</label>
                    <div className="col-8">
                        <input id="description" name="description" key='description' onChange={this.handledescription(index)}  placeholder="classname" type="text" className="form-control" />
                    </div>
                </div>
              <button class="btn btn-danger" onClick={this.handleDelete(index)}>delete</button>
            </span>
          ))}
          <button class="btn btn-success mx-1 my-1" onClick={this.addQuestion}>Add New Exam</button>
        </Fragment>
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
      id: '',
      put_data:
      {
        name: '',
        type: '',
        class: '',
        exam: {
          datetime: '',
          description: '',
          subject: '',
        },
		exam:[],
		questions: [],
		datetime:[],
		description:[],
		flag:0,
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.Delete = this.Delete.bind(this)
    this.Update = this.Update.bind(this)
	this.handleChange = this.handleChange.bind(this)
    this.Create = this.Create.bind(this)
    this.handleText = this.handleText.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handledescription = this.handledescription.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
  }
  //////////////////////////////////////////////////////////////
  handleText = i => e => {
    let questions = [...this.state.questions]
    questions[i] = e.target.value
    this.setState({
      questions
    })
  }
  handleDate = i => e => {
    let datetime = [...this.state.datetime]
    datetime[i] = e.target.value
    this.setState({
      datetime
    })
  }
  handledescription = i => e => {
    let description = [...this.state.description]
    description[i] = e.target.value
    this.setState({
      description
    })
  }

  handleDelete = i => e => {
    e.preventDefault()
    let questions = [
      ...this.state.questions.slice(0, i),
      ...this.state.questions.slice(i + 1)
    ]
    this.setState({
      questions
    })
    let datetime = [
      ...this.state.datetime.slice(0, i),
      ...this.state.datetime.slice(i + 1)
    ]
    this.setState({
      datetime
    })
    let description = [
      ...this.state.description.slice(0, i),
      ...this.state.description.slice(i + 1)
    ]
    this.setState({
      description
    })
  }

  addQuestion = e => {
    e.preventDefault()
    let questions = this.state.questions.concat([''])
    this.setState({
      questions
    })
    let datetime = this.state.datetime.concat([''])
    this.setState({
      datetime
    })
    let description = this.state.description.concat([''])
    this.setState({
      description
    })
  }
  //////////////////////////////////////////////////////////////

  Update = (e) => {
    e.preventDefault()
    fetch('http://' + SERVER_URL + '/api/exam/' + this.props.select._id + '/', {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(this.state.put_data),
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    })
      .then(response => response.status)
      .then(async (data) => await (data < 300) ? window.location.reload() : alert('You can not update a sample'))
  }
  Delete(e) {
    fetch('http://' + SERVER_URL + '/api/exam/' + this.props.select._id, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    })
      .then(response => response.status)
      .then(async (data) => await (data < 300) ? window.location.reload() : alert('Not Successful'))
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
	  if(this.state.flag == 0){
		  if(this.props.select.exam != undefined){
			this.setState({exam:this.props.select.exam})
			this.setState({flag:1})
		  }
	  }
    return (
      <div>
        <div className="form-group row">
          <label htmlFor="type" className="col-4 col-form-label">type</label>
          <div className="col-8">
            <select id='type' name='type' key='type' placeholder={this.props.select.type} onChange={this.handleChange} required='required' className="custom-select">
              {this.props.option.examtype}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-4 col-form-label">name</label>
          <div className="col-8">
            <select id='name' name='name' key='name' placeholder={this.props.select.name} onChange={this.handleChange} required='required' className="custom-select">
              {this.props.option.examname}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="class" className="col-4 col-form-label">name</label>
          <div className="col-8">
            <select id='class' name='class' key='class' placeholder={this.props.select.class} onChange={this.handleChange} required='required' className="custom-select">
              {this.props.option.class}
            </select>
          </div>
        </div>
		<Fragment>
          {this.state.questions.map((question, index) => (
            <span key={index}>
              <div className="form-group row">
                <label htmlFor="student" className="col-4 col-form-label">subject</label>
                <div className="col-8">
                  <select id='subject' class="form-control selectpicker" data-live-search="true" name='subject' key='subject' placeholder={this.state.questions[i]} onChange={this.handleText(index)} required='required' className="custom-select">
                    {this.props.option.subject}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                    <label htmlFor="datetime" className="col-4 col-form-label">Date</label>
                    <div className="col-8">
                        <input id="datetime" name="datetime" key='datetime' onChange={this.handleDate(index)}  placeholder={this.state.datetime[i]} type="date" className="form-control" />
                    </div>
                </div>
              <div className="form-group row">
                    <label htmlFor="date" className="col-4 col-form-label">description</label>
                    <div className="col-8">
                        <input id="description" name="description" key='description' onChange={this.handledescription(index)}  placeholder={this.state.description[i]} type="text" className="form-control" />
                    </div>
                </div>
              <button class="btn btn-danger" onClick={this.handleDelete(index)}>delete</button>
            </span>
          ))}
          <button class="btn btn-success mx-1 my-1" onClick={this.addQuestion}>Add New Exam</button>
        </Fragment>
        
        <div className="form-group row">
          <div className="offset-4 col-8">
            <button name="submit" type="submit" onClick={this.Update} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

