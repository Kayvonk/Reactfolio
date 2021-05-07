import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./style.css";

const BurgerMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle} size="lg">
            <DropdownToggle className="dropdown-toggle" >
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem href="/">Home</DropdownItem>
                <DropdownItem href="/portfolio">Portfolio</DropdownItem>
                <DropdownItem href="/contact">Contact</DropdownItem>
            </DropdownMenu>
        </Dropdown >
    );
}


export default BurgerMenu;