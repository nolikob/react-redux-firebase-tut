import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/login">Sign in</NavLink></li>
            <li><NavLink to="/register">Sign up</NavLink></li>
        </ul>
    );
};

export default SignedOutLinks;