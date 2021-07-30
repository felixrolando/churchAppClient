import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { DeviceSize } from "../responsive/screensSize";
import { Logo } from "../logo/index";
import { NavLinks } from "./navLinks";
import { MobileNavLinks } from "./mobileNavLinks";
import BtnDarkMode from "./btnDarkMode";
import BtnLang from "./btnLang";
import Home from "../home";
import Resources from "../resources";
import Contact from "../contact";
import About from "../about";
import PageNotFound from "../pageNotFound";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 2;
`;

export function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <Router>
      <NavbarContainer>
        <LeftSection>
          <Logo />
        </LeftSection>
        <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
        <RightSection>
          {!isMobile && (
            <>
              <BtnDarkMode />
              <BtnLang />
            </>
          )}
          {isMobile && <MobileNavLinks />}
        </RightSection>
      </NavbarContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recursos" component={Resources} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/conocenos" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
