import {
  LinkContainer,
  LinkLabel,
  LinkMarker,
  Logo,
  NavContainer,
  NavMark,
  Navigation,
} from "./components/style";
import { routerLabels } from "../../utils/router.labels";
import { Link, useLocation } from "react-router-dom";
import star from "../../assets/img/star.png"

const Navbar = () => {
  const local = useLocation();
  return (
    <NavContainer>
      <Logo src={star}/>
      <NavMark/>
      <Navigation>
        <div className="wrapper">
          {routerLabels.map((label, index) => (
            <LinkContainer key={index}>
              <Link to={label.path} style={{ textDecoration: "none" }}>
                <LinkLabel>
                  <span>{label.id}</span>
                  {label.label}
                  {local.pathname.toLowerCase() === label.path && <LinkMarker/>}
                </LinkLabel>
              </Link>
            </LinkContainer>
          ))}
        </div>
      </Navigation>
    </NavContainer>
  );
};

export default Navbar;
