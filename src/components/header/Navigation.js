
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color='light' light expand="sm">
                    <div className="container">

                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">Photo Gallery</NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to='/' className="nav-link active">Home</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to='/Gallery' className="nav-link ">Gallery</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }

}

export default Navigation;