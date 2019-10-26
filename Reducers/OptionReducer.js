import {UPDATE_OPTION} from '../Actions/optionAction'

export default function OptionReducer(state='',{type,payload})
    {
        if(type === UPDATE_OPTION){
            return {
                type:UPDATE_OPTION,
                payload:{
                    option:payload.option
                }
            }//payload.Nav//.newState
        }
        return state
}
