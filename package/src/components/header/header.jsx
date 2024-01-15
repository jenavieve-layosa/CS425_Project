/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';


import logo from '../../assets/images/robot_logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand ><img src={logo} alt="wrapkit" /></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 justify-content-end" id="h6-info">
                            <Nav navbar className="ms-auto">
                                <NavItem>
                                    <Link className="nav-link" to={"/HomePage"}>
                                        Home
                                    </Link>
                                </NavItem>
                                <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        Lessons <i className="fa fa-angle-down m-l-5"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="b-none animated fadeInUp">
                                        <DropdownItem><Link to={"/Lesson1"}>Lesson 1</Link></DropdownItem>
                                        <DropdownItem><Link to={"/Lesson2"}>Lesson 2</Link></DropdownItem>
                                        <DropdownItem><Link to={"/Lesson3"}>Lesson 3</Link></DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/Simulator"}>
                                        Simulation
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/Glossary"}>
                                        Glossary
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/HomePage"}>
                                        About
                                    </Link>
                                </NavItem>
                            </Nav>
                            <div className="act-buttons">
                                <Link to="/SignUp" className="btn btn-success-gradiant font-14">Login</Link>
                            </div>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
