import React, { useEffect, useState } from "react";
import logo from "../images/logo/netflix-logo-png-2562.png";
import avatar from "../images/avatars/user_avatar.jpg";
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src={logo} alt="logo" />
            <img className="nav__avatar" src={avatar} alt="user_avatar" />
        </div>
    );
}

export default Nav;
