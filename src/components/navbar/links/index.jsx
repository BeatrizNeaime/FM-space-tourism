import React from "react";
import { LinkDiv, LinkNavbar } from "./style";
import { Link } from "react-router-dom";

const LinkNav = ({ currentPage, id, name, path }) => {
  return (
    <LinkDiv active={name === currentPage ? true : false}>
      <Link to={path} style={{ textDecoration: "none" }}>
        <LinkNavbar>
          <b>{id} </b>
          {name}
        </LinkNavbar>
      </Link>
    </LinkDiv>
  );
};

export default LinkNav;
