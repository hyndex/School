export const UPDATE_NAV='NavChange'

export default function UpdateNav(newNav){
    return {
        type:UPDATE_NAV,
        payload:{
            Nav:newNav
        }
    }
}