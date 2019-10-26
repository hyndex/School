export const UPDATE_SELECT='SelectChange'
 
export default function UpdateSelect(newSelect){
    return {
        type:UPDATE_SELECT,
        payload:{
            select:newSelect
        }
    }
}

