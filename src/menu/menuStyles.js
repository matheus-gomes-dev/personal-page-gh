/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import styled from 'styled-components';

export const BurgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  position: absolute;
  top: 10px;
  z-index: 2;
  margin-left: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  i {
    color: black;
    font-size: 30px;
    margin: 5px;
  }
`;

export const OptionsMenu = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 240px;
  height: 100vh;
  z-index: 2;
  background-color: #2b2b2b;
  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    font-size: 25px;
    float: right;
    color: white;
    position: relative;
    left: 40px;
    i {
      cursor: pointer;
    }
  }
`;

export const Option = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
  cursor: pointer;
  font-size: 16px;
  span, i {
    margin-left: 15px;
  }
  span {
    font-weight: 600;
  }
  &:hover {
    background-color: #d3d3d3;
    color: black;
  }
`;
