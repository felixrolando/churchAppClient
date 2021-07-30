import React from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

const Div = styled.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    background-color: #111;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 18px;
    width: 35px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 15px;
    width: 15px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(17px);
  }
`;

const BtnDarkMode = () => {
  return (
    <Div>
      <input type="checkbox" className="checkbox" id="chk" />
      <label className="label" htmlFor="chk">
        <FaMoon color="f1c40f" />
        <FaSun color="f39c12" />
        <div className="ball"></div>
      </label>
    </Div>
  );
};

export default BtnDarkMode;
