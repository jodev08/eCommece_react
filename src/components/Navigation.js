import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li>accueil</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
