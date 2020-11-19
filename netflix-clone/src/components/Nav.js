import React, { useEffect, useState } from "react";
import logo from "../images/logo/netflix-logo-png-2562.png";
import avatar from "../images/avatars/user_avatar.jpg";
function Nav() {
    return (
        <div className="nav">
            <img className="nav__logo" src={logo} alt="logo" />

            <img className="nav__avatar" src={avatar} alt="user_avatar" />
        </div>
    );
}

export default Nav;
