import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import logoa from ".././img/logo-1.png";
import { Box, Grid } from "@mui/material";
import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 18px;
`;
const SociaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background: #${(props) => props.color};
  display: flex;

  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 450;
  margin-bottom: 6px;
`;

const ContactItem = styled.div`
  margin-bottom: 18px;
  display: flex;

  align-items: center;
`;

const Footer = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="40vh">
      <Grid
        item
        xs={12}
        lg={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="60px" height="50px">
          <img
            src={logoa}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <span>Do shop</span>
        <SocialContainer>
          <SociaIcon color="3B5999">
            <Facebook />
          </SociaIcon>
          <SociaIcon color="55ACEE">
            <Twitter />
          </SociaIcon>
          <SociaIcon color="E4405F">
            <Instagram />
          </SociaIcon>
          <SociaIcon color="E60023">
            <Pinterest />
          </SociaIcon>
        </SocialContainer>
      </Grid>
      <Grid
        item
        xs={12}
        lg={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={{ xs: "20px", lg: "0" }}
      >
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 555 Perth Square, East
          Chester 67543
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +41 789 34 23
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@abc.com
        </ContactItem>
      </Grid>
    </Grid>
  );
};

export default Footer;
