import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from "./styles";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Inicio</Footer.Title>
            <Footer.Link href="#">Nosotros</Footer.Link>
            <Footer.Link href="#">Actividades</Footer.Link>
            <Footer.Link href="#">Sermones</Footer.Link>
            <Footer.Link href="#">Ministerios</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Recursos</Footer.Title>
            <Footer.Link href="#">Calendario</Footer.Link>
            <Footer.Link href="#">Sermones</Footer.Link>
            <Footer.Link href="#">Plan de lectura</Footer.Link>
            <Footer.Link href="#">Confesion de Fe</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Nosotros</Footer.Title>
            <Footer.Link href="#">Nuestra historia</Footer.Link>
            <Footer.Link href="#">Pastores</Footer.Link>
            <Footer.Link href="#">Diaconos</Footer.Link>
            <Footer.Link href="#">Ministerios</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Redes</Footer.Title>
            <Footer.Link href="#">
              <Footer.Icon>
                <FaFacebook />
              </Footer.Icon>
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Footer.Icon>
                <FaInstagram />
              </Footer.Icon>
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Footer.Icon>
                <FaYoutube />
              </Footer.Icon>
              Youtube
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
};

export default FooterContainer;
