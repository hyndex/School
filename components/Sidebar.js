import React from 'react'
import Link from 'next/link'
import {withRouter} from 'next/router';
import store from '../Reducers/Reducer'
import UpdateNav from '../Actions/NavAction'



export default class Sidebar extends React.Component{
    constructor()
    {
        super()
        var test_options=[
            ['Student','./Student',true],
            //['Attendence','./Attendence',true],
            ['Category','./Category',true],
            ['Class','./Class',true],
            //['Exam ','./Exam',true],
            //['Mark ','./Mark',true],
            ['User ','./Exam',true],
            ['Batch','./Batch',true],
            ['Department','./Department',true],
            // ['ExamBrowser','./ExamBrowser',true],
            ['ExamName','./ExamName',true],
            ['ExamType','./ExamType',true],
            ['Register','./Register',true],
            ['Semester','./Semester',true],
            ['Staff','./Staff',true],
            ['Subject','./Subject',true],
            ['SubjectType','./SubjectType',true],
            ['Year','./Year',true],
            
        ]
        
        this.state={
            options:test_options,
            current:store.getState().nav.payload.Nav
        }
    }

    Clicked(arr){
        // console.log('clicked')
        console.log(arr)
        store.dispatch(UpdateNav(arr))
    }
    
    render(){
        var option_table=[]
        for (var arr in this.state.options) {
            const field = this.state.options[arr][0]
            const option_link = this.state.options[arr][1]
            const view = this.state.options[arr][2]
            const index= arr
            var active=''
            if (this.props.selected==field){
                active='table-active'
            }
            
            if(view){
                option_table.push(
                    <Link href={option_link} key={arr}>
                    <tr className={active} key={arr} onClick={()=>this.Clicked(index)}>
                        <td>
                           {field}
                        </td>
                    </tr>
                    </Link>
                )
            }
            

        }
        return(
            <div className="col-2 my-4">
                <table className="table table-hover">
                <tbody>
                    {option_table}
                </tbody>
                </table>
            </div>
        )
    }
}