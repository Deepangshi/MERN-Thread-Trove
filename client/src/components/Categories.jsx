import React from "react";
import { styled } from "styled-components";
import { categories } from "../data";

import { Grid } from "@mui/material";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: #fff;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 10px;
  background: #fff;
  color: gray;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid gray;
`;

const Categories = () => {
  return (
    <Grid container padding="20px" justifyContent="space-between">
      {categories.map((item) => (
        <Container item={item} key={item.id}>
          <Image src={item.img} alt="" />
          <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
        </Container>
      ))}
    </Grid>
  );
};

export default Categories;
