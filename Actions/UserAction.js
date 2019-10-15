export const UPDATE_USER='ChangeLog'

export default function UpdateUser(newUser){
    return {
        type:UPDATE_USER,
        payload:{
            logged:newUser
        }
    }
}

