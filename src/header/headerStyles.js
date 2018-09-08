/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import styled from 'styled-components';

export const HeaderCurrentLanguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  float: right;
  margin-right: 30px;
  margin-top: 10px;
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

export const HeaderLanguages = styled.div`
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

export const HeaderGradient = styled.div`
  height: 400px;
  width: 100%;
  background-color: #1fc8db;
  background-image: linear-gradient(141deg, black 0%, #4d4d4d 51%, black 99%);
  color: white;
  opacity: 0.95;
`;

export const HeaderImage = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid black;
  border-radius: 50%;
  margin: auto;
  position: relative;
  top: 40px;
  background: url('http://oi65.tinypic.com/11m5346.jpg') no-repeat center;
  background-size: cover;
`;

export const HeaderName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin: auto;
  margin-top: 70px;
  span {
    font-weight: 700;
    font-size: 30px;
  }
`;

export const HeaderDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: auto;
  span {
    font-weight: 300;
    font-size: 18px;
    font-style: italic;
  }
`;
