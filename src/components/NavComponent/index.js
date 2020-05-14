import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

const NavComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand>Issouf Kiema</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/about" className="btn m-2 btn-success">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/portfolio" className="btn m-2 btn-success">Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/resume" className="btn m-2 btn-success">Resume</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="btn m-2 btn-success">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );


}

export default NavComponent;