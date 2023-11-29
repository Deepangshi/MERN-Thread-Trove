import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import carta from ".././img/carta.png";
import cartb from ".././img/cartb.png";

import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#000" : "transparent"};
  color: ${(props) => props.type === "filled" && "#fff"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 200px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-iyems: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid gray;
  border-radius: 10px;
  padding: 20px 20px;
  height: 50vh;
`;

const Summaryhere = [
  {
    id: 1,
    title: "Subtotal",
    price: "$ 95",
  },
  {
    id: 2,
    title: "Shipping",
    price: "$ 5",
  },
];

const SummaryTitle = styled.div`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <ImageContainer>
                  <Image src={carta} alt="" />
                </ImageContainer>
                <Details>
                  <ProductName>
                    <b>Product:</b> Jessie thunder shoes
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> #24567890
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b> Size : </b> 37, 38 , 39
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 120</ProductPrice>
              </PriceDetail>
            </Product>

            {/* 2nd  */}
            <Product>
              <ProductDetail>
                <ImageContainer>
                  <Image src={cartb} alt="" />
                </ImageContainer>
                <Details>
                  <ProductName>
                    <b>Product:</b> Leather jacket
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> #5508832
                  </ProductId>
                  <ProductColor color="#65350F" />
                  <ProductSize>
                    <b> Size : </b> s, m , l
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 120</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            {Summaryhere.map((item) => (
              <SummaryItem item={item} key={item.id}>
                <SummaryItemText>{item.title}</SummaryItemText>
                <SummaryItemPrice>{item.price}</SummaryItemPrice>
              </SummaryItem>
            ))}
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 100</SummaryItemPrice>
            </SummaryItem>

            <Button>Check Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
