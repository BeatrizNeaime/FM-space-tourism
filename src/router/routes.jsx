import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import DesktopHome from "../views/desktop/home";

import PhoneHome from "../views/mobile/phone/home";

import TabletHome from "../views/mobile/tablet/home";

export const Rotas = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const tablet = useMediaQuery("(min-width: 768px)");
  const phone = useMediaQuery("(max-width: 767px)");

  if (desktop) {
    return (
      <Routes>
       <Route path="/" element={<DesktopHome />} />
      </Routes>
    );
  } else if (tablet) {
    return (
      <Routes>
        <Route path="/" element={<TabletHome />} />
      </Routes>
    );
  } else if (phone) {
    return (
      <Routes>
        <Route path="/" element={<PhoneHome/>} />
      </Routes>
    );
  }
};
