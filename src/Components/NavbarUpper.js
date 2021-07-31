import React from "react";
import "./side.css";
import Logo from "../media/worker_logo.png";
import Pro from "../media/Contacts.png";

function NavbarUpper() {
  return (
    <div className="upper">
      <section>
        <img src={Logo} alt="LOGO" height="50px" width="150px" />

        <img
          src={Pro}
          alt="profile"
          height="50px"
          width="50px"
          className="Profile"
        />
      </section>
    </div>
  );
}

export default NavbarUpper;
