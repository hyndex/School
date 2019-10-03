import React from 'react'
import App from '../components/App'


export default class dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "dikibhuyan",
            password: "qwertyuiop",
            role:'admin',
            logged: false,
            Token: '9988776655544332211',
            menu:'AdminNavMenu',
            section:''
        }
    }
    render() {
        return (
            <div>
                <App info={this.state}/>
            </div>
            )
    }
}