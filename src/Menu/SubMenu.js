import React from 'react';
import { DropdownToggle, NavItem, UncontrolledDropdown, DropdownMenu } from 'reactstrap';
import MenuItem from './MenuItem';

const SubMenu = ({children}) => {
    // debugger;
    return (
        children.map((child, index) => {
            return (
                child.child.length === 0 ?
                <NavItem >{child.name}</NavItem>                
                :
                <UncontrolledDropdown nav inNavbar >
                    <DropdownToggle nav caret >{child.name}</DropdownToggle>
                    <DropdownMenu right>
                        {child.child.map((data, index) => <MenuItem key={data.name + index} itemData={data} />)}
                    </DropdownMenu>
                </UncontrolledDropdown>
            )
        })
    );
};

export default SubMenu;