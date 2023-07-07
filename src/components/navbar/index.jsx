import { Row } from "../../styles/sharedStyles";
import { LogoImg, NavbarMenu } from "./style";
import { links } from "../../hooks/links";
import LinkNav from "./links";
import { useState } from "react";

const Navbar = ({ active }) => {
  const [currentPage, setCurrentPage] = useState(active);

  return (
    <Row
      height={"50px"}
      style={{ padding: "10px", position: "fixed", top: "20px" }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "100px",
        }}
      >
        <LogoImg src={require("../../assets/img/star.jpg")} />
      </div>
      <NavbarMenu>
        {links.map((link) => {
          return (
            <LinkNav
              id={link.id}
              name={link.name}
              path={link.path}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          );
        })}
      </NavbarMenu>
    </Row>
  );
};

export default Navbar;
