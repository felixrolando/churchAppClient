import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import Resources from "./resources";
import Contact from "./contact";
import About from "./about";
import PageNotFound from "./pageNotFound";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Header = styled.header`
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Ul = styled.ul`
  list-style-type: none;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  flex: 1;
`;

const Li = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003c58;
  padding: 8px 20px;
  text-transform: uppercase;
`;

const HeaderComponent = () => {
  return (
    <Router>
      <div>
        <Header>
          <div>
            <img src={logo} style={{ width: 119, height: 35 }} />
          </div>
          <Nav>
            <Ul>
              <Li>
                <StyledLink to="/">Inicio</StyledLink>
              </Li>
              <Li>
                <StyledLink to="/recursos">recursos</StyledLink>
              </Li>
              <Li>
                <StyledLink to="/conocenos">conócenos</StyledLink>
              </Li>
              <Li>
                <StyledLink to="/contacto">contactos</StyledLink>
              </Li>
            </Ul>
          </Nav>
        </Header>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recursos" component={Resources} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/conocenos" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default HeaderComponent;
