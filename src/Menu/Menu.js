import React from 'react';
import {menuData} from '../menuData';
import MenuItem from './MenuItem';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Nav, Navbar, Collapse, Container } from 'reactstrap';

const Menu = () => {
    console.log(menuData);

    return (
        <Container>
            <div className="row">
                <div className="col-12">
                    <Navbar expand="lg">
                        <Collapse navbar>
                            <Nav navbar>
                                {
                                    menuData.map(data => <MenuItem itemData={data} />)
                                }
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        </Container>
    );
};

export default Menu;