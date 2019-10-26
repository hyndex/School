export const UPDATE_OPTION='OptionChange'
  
export default function UpdateOption(newOption){
    return {
        type:UPDATE_OPTION,
        payload:{
            option:newOption
        }
    }
}





