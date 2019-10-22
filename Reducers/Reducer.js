import React from 'react'
import ReactDom from 'react-dom'
import {combineReducers, createStore, compose } from 'redux'

import UserReducer from './UserReducer'
import NavReducer from './NavReducer'
import SelectReducer from './SelectReducer'


const allReducer=combineReducers({
    user:UserReducer,
    nav:NavReducer,
    select:SelectReducer
})

const store = createStore(allReducer, 
    {
        user:{type:'ChangeLog',payload:{logged:''}},
        nav:{type:'NavChange',payload:{Nav:0}},
        select:{type:'SelectChange',payload:{select:''}}
    },
    compose(
        (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
       )
)

console.log(store.getState())

export default store