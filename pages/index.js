import React from 'react'
//import fetch from 'isomorphic-unfetch'
//import Cookies from 'universal-cookie';


export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            checked: false,
            redireact:'',
            redireact_str:'',
            permission:{}
        }
    }


    render() 
    {
        return (
                    <h1>hello world</h1>
                );
    }
}