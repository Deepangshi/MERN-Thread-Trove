import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on All Orders Over $100</Container>
  );
};

export default Announcement;
