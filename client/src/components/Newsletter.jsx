import { Send } from "@mui/icons-material";

import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fcf5f5;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 18px;
`;
const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  background: #fff;
  width: 50%;
`;
const Input = styled.input`
  flex: 5;
  outline: none;
  border: 1px solid gray;
  padding-left: 10px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
