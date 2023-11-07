import React, {Component} from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import css from "./NavMenu.css";
import {Link} from "react-router-dom";

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/users">Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/create">Create User</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        );
    }
}
