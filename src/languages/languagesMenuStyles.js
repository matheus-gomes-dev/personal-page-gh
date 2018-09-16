/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import styled from 'styled-components';

export const CurrentLanguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  position: absolute;
  top: 10px;
  z-index: 30;
  float: right;
  margin-right: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  i {
    color: black;
    font-size: 12px;
    margin: 5px;
  }
  img {
    width: 40px;
    height: 40px;
    margin: 5px;
  }
`;

export const LanguagesOptions = styled.div`
  width: 170px;
  right: 0px;
  background-color: white;
  position: absolute;
  top: 53px;
  border-radius: inherit;
  border: inherit;
  div {
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    color: black;
    border-radius: inherit;
  }
  div:hover {
    background-color: #d3d3d3;
  }
`;
