import {UPDATE_SELECT} from '../Actions/SelectAction'

export default function SelectReducer(state='',{type,payload})
    {
        if(type === UPDATE_SELECT){
            return {
                type:UPDATE_SELECT,
                payload:{
                    select:payload.select
                }
            }//payload.Nav//.newState
        }
        return state
}
