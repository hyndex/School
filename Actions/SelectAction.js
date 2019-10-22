export const UPDATE_SELECT='ChangeSelect'

export default function UpdateUser(newSelect){
    return {
        type:UPDATE_SELECT,
        payload:{
            select:newSelect
        }
    }
}

