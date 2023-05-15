import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css"


export const Nav = () => {
    return (
        <div className="Nav_App">
            <NavLink to={"/"} >One Cat</NavLink>
            <NavLink to={"/ManyCats"} >Many Cats</NavLink>
        </div>
    )
}