import React from 'react'
import Link from 'next/link'
import {
    AdminNavMenu,
    StaffNavMenu,
    StudentNavMenu,
    DepertmentNavMenu,
    PlacementNavMenu
} from '../endpoints/SideBarEndPoints'

export default class SideBar extends React.Component {
    constructor() {
        super()
        this.state = {
            role: 'admin',
            menu: AdminNavMenu,
            expanded: null,
        }
        this.createMenu = this.createMenu.bind(this)
    }
    createSubMenu(items) {
        var sub_menu_items = []
        items.map((item, index) => {
            sub_menu_items.push(
                <li key={index}>
                    <Link href={item.url}>
                        <a>
                            {item.name}
                        </a>
                    </Link>
                </li>
            )
        })
        return sub_menu_items
    }
    createMenu(menu) {
        var menu_items = []
        menu.map((item, index) => {
            var expand = (e) => {
                e.preventDefault();
                if (index == this.state.expanded) var newIndex = null;
                else var newIndex = index;

                this.setState({ expanded: newIndex });
            };
            var subMenu = (
                <ul className="border-left">
                    {this.createSubMenu(item.menus)}
                </ul>
            );
            menu_items.push(
                <li key={index} className="pb-3 border-bottom">
                    <a href="#" index={index} onClick={expand}>
                        {item.groupname}
                    </a>
                    {this.state.expanded == index ? subMenu : ''}
                </li>
            )
        })
        return menu_items
    }
    render() {
        var menu = StudentNavMenu
        switch (this.props.role) {
            case 'admin': menu = AdminNavMenu;
                break;
            case 'staff': menu = StaffNavMenu;
                break;
            case 'student': menu = StudentNavMenu;
                break;
            case 'depertment': menu = DepertmentNavMenu;
                break;
            case 'placement': menu = PlacementNavMenu;
                break;
            default: menu = AdminNavMenu;
                break;
        }
        menu = AdminNavMenu
        var menu_items = this.createMenu(menu)
        console.log(menu_items)
        return (
            <div>
                <nav id="sidebar">
                    <ul>
                        {menu_items}
                    </ul>
                </nav>

            </div>
        )
    }
}