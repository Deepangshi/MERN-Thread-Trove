import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import morec from "../img/morec.png";
import { Box, Grid } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  color: #000;
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 200;

  margin-bottom: 20px;
`;
const Price = styled.div`
  font-size: 24px;
  font-weight: 100;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.div`
  font-size: 18px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  background: #fff;
  border: 1px solid gray;
  outline: none;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const AmountContainer = styled.option`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid gray;
  background: #fff;
  outline: none;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #f7f8fa;
  }
`;

const Product = () => {
  return (
    <Grid>
      <Navbar />
      <Announcement />
      <Box
        sx={{
          padding: "50px 50px",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box width={{ xs: "auto", lg: "50%" }}>
          <Image src={morec} alt="" />
        </Box>
        <InfoContainer>
          <Title>Denim Jacket</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            justo metus, ullamcorper eu mattis eget, efficitur vitae ipsum.
            Mauris tempor neque vitae est lacinia, at pulvinar massa posuere.
            Maecenas arcu augue, tristique in lectus sed, pretium aliquet elit.
            Nunc pharetra eleifend tristique. Proin vestibulum sem sed neque
            condimentum blandit. Duis at libero at est scelerisque cursus ac ut
            nibh. Suspendisse gravida pulvinar sapien vel ultrices. Donec eget
            lectus diam. Sed eu diam egestas, mattis velit id, iaculis justo.
          </Desc>
          <Price>$ 30</Price>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "30px 0px",
              width: "50%",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption disabled selected>
                  Size
                </FilterSizeOption>

                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </Box>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Box>
      <Newsletter />
      <Footer />
    </Grid>
  );
};

export default Product;
