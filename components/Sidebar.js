import React from 'react'
import {
    AdminNavMenu,
    StaffNavMenu,
    StudentNavMenu,
    DepertmentNavMenu,
    PlacementNavMenu
} from '../endpoints/NavBarEndPoints'

export default class SideBar extends React.Component{
    constructor(){
        super()
        this.state={
            role:'admin',
            menu:AdminNavMenu
        }
    }
    createSubMenu(items){
        var sub_menu_items=[]
        items.map((item,index)=>{
            sub_menu_items.push(
                <li>
                    <a href={item.url}>
                    {item.name}
                    </a>
                </li>
            )
        })
        return sub_menu_items
    }
    render(){
        var menu_items=[]
        AdminNavMenu.map((item,index)=>{
            menu_items.push(
                <li id={index}>
                    <a href="#">
                        {item.groupname}
                    </a>
                    <ul>
                        {this.createSubMenu(item.menus)}
                    </ul>
                </li>
            )
        })
        console.log(menu_items)
        return(
            <div>
                <nav>
                    <ul>
                        {menu_items}                       
                    </ul>
                </nav>

            </div>
        )
    }
}