import React from "react";

const Header = () => {
  return (
    <div className="ui teal inverted labeled icon menu ">
      <a href="/" className="active item right">
        <i aria-hidden="true" className="tasks icon"></i>
        Tasks
      </a>
      <a href="/" className="item">
        <i aria-hidden="true" className="sign out icon"></i>
        Sign out
      </a>
    </div>
  );
};

export default Header;
