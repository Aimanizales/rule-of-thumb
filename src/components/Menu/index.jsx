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
                    <Link to="/past-trials">Past Trials</Link>
                </li>
                <li>
                    <Link to="/how-it-works">How it Works</Link>
                </li>
                <li>
                    <Link to="/login">Login / Sign Up</Link>
                </li>
            </ul>
        </NavMenu>
)};

export default Menu;
