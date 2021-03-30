import React from "react";
import {
    Link
} from "react-router-dom";
import NavMenu from './StyledMenu.js';

function Menu () {
    return (
        <NavMenu>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </NavMenu>
)};

export default Menu;
