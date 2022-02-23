import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <ul className="navBar">
            <li className="navbar__item employees">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item customers active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item serviceTickets">
                <Link className="navbar__link" to="/tickets">Service Tickets</Link>
            </li>
            <li className="navbar__item home">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("honey_customer")
                    }
                }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}