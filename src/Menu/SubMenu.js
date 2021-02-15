import React from 'react';
import { DropdownToggle, NavItem, UncontrolledDropdown } from 'reactstrap';
import MenuItem from './MenuItem';

const SubMenu = ({children}) => {
    debugger;
    return (
        children.map((child) => {
            return (
                child.child.length === 0 ?
                <NavItem>{child.name}</NavItem>                
                :
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret >{child.name}</DropdownToggle>
                    {child.child.map(data => <MenuItem itemData={data}/>)}
                </UncontrolledDropdown>
            )
        })
    );
};

export default SubMenu;