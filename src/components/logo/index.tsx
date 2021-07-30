import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 119px;
  height: 35px;
  img {
    width: 100%;
    height: 100%;
  }
`;

// const LogoText = styled.h2`
//   font-size: 16px;
//   margin: 0;
//   margin-left: 4px;
//   color: #222;
//   font-weight: 500;
// `;

export function Logo() {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={logoImg} alt="Iglesia Bautista Reformada de Santiago" />
      </LogoImg>
      {/* <LogoText>Iglesia Bautista Reformada de Santiago</LogoText> */}
    </LogoWrapper>
  );
}
