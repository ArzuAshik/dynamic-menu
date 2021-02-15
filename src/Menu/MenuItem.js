import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, UncontrolledDropdown } from 'reactstrap';
import SubMenu from './SubMenu';

const MenuItem = ({itemData}) => {
    // const toggle = () => setOpen(!dropdownOpen);
    // debugger;
    return (
        itemData.child.length === 0 ?
        <NavItem>
            <Link to="/home" className='nav-link'>
                {itemData.name}
            </Link>
        </NavItem>
        :
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>{itemData.name}</DropdownToggle>
            <DropdownMenu right>
                    <SubMenu children={itemData.child} />
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

export default MenuItem;