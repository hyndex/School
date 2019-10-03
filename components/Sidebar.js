import React from 'react'
import {
    AdminNavMenu,
    StaffNavMenu,
    StudentNavMenu,
    DepertmentNavMenu,
    PlacementNavMenu
} from '../endpoints/SideBarEndPoints'

export default class SideBar extends React.Component{
    constructor(){
        super()
        this.state={
            role:'admin',
            menu:AdminNavMenu
        }
        this.createMenu=this.createMenu.bind(this)
    }
    createSubMenu(items){
        var sub_menu_items=[]
        items.map((item,index)=>{
            sub_menu_items.push(
                <li key={index}>
                    <a href={item.url}>
                    {item.name}
                    </a>
                </li>
            )
        })
        return sub_menu_items
    }
    createMenu(menu){
        var menu_items=[]
        menu.map((item,index)=>{
            menu_items.push(
                <li key={index}>
                    <a href="#">
                        {item.groupname}
                    </a>
                    <ul>
                        {this.createSubMenu(item.menus)}
                    </ul>
                </li>
            )
        })
        return menu_items
    }
    render(){
        var menu = StudentNavMenu
        switch(this.props.role){
            case 'admin': menu=AdminNavMenu;
            break;
            case 'staff':  menu=StaffNavMenu;
            break;
            case 'student':  menu=StudentNavMenu;
            break;
            case 'depertment':  menu=DepertmentNavMenu;
            break;
            case 'placement':  menu=PlacementNavMenu;
            break;
            default:  menu=AdminNavMenu;
            break;
        }
        var menu_items=this.createMenu(menu)
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