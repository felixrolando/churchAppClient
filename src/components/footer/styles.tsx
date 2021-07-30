import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(0, 60, 88, 1) 0%,
    rgba(1, 60, 88, 1) 100%
  );
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Icon = styled.i`
  font-size: 18px;
  margin-right: 16px;
`;

export default function Footer({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }: any) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Row = function FooterRow({ children, ...restProps }: any) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: any) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }: any) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: any) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Icon = function FooterIcon({ children }: any) {
  return <Icon>{children}</Icon>;
};
