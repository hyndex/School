import {UPDATE_NAV} from '../Actions/NavAction'

export default function NavReducer(state='',{type,payload})
    {
        if(type === UPDATE_NAV){
            return {
                type:UPDATE_NAV,
                payload:{
                    Nav:payload.Nav
                }
            }//payload.Nav//.newState
        }
        return state
}