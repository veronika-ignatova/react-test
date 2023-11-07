import React, {Component} from 'react';
import { Container } from 'reactstrap';
import {Link, Outlet} from "react-router-dom";
import css from './Layout.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <>
                <div className={css.header}>
                    <Link to="/">Home</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/create">Create User</Link>
                </div>
                <Container>
                    {this.props.children}
                </Container>
            </>

        );
    }
}
