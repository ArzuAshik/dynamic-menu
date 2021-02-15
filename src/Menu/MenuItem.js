import React, { useState }from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, UncontrolledDropdown } from 'reactstrap';
import SubMenu from './SubMenu';

const MenuItem = ({itemData}) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    return (
        itemData.child.length === 0 ?
        <NavItem>{itemData.name}</NavItem>
        :
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>{itemData.name}</DropdownToggle>
            <DropdownMenu right>
                <UncontrolledDropdown nav inNavbar>
                    <SubMenu children={itemData.child} />
                </UncontrolledDropdown>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

export default MenuItem;