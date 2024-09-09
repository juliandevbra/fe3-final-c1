import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/detail">
        <h4>Detail</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>

      <button>🌞/🌜</button>
    </div>
  );
};

export default Navbar;
