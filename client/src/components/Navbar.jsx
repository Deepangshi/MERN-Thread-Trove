import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Box, Grid } from "@mui/material";
import React from "react";

import logoa from ".././img/logo-1.png";

const Navbar = () => {
  return (
    <Grid
      container
      sx={{
        height: "60px",
        width: "100%",
        backgroundColor: "Purple",
        color: "#fff",
        alignItems: "center",
        paddingLeft: "20px",
        paddingRight: "30px",
      }}
    >
      <Grid item xs={4} display="flex">
        <Box
          style={{
            fontSize: { xs: "12px", lg: "15px" },
            cursor: "pointer",
          }}
        >
          En
        </Box>
        <Box
          sx={{
            display: "flex",
            marginLeft: "10px",
            width: { xs: "100%", lg: "auto" },
            border: "1px solid lightgray",
            borderRadius: "3px",
            overflow: "hidden",
          }}
        >
          <input
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              height: "auto",
              color: "#fff",
            }}
            type="text"
            placeholder="Search"
          />

          <Search
            sx={{
              color: "gray",
              fontSize: "10",
              margin: "0",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={4} display="flex" textAlign="center">
        <Box width="60px" height="50px" margin="auto">
          <img
            src={logoa}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Box
          marginRight={{ xs: "4px", lg: "10px" }}
          fontSize={{ xs: "12px", lg: "18px" }}
          sx={{ cursor: "pointer" }}
        >
          REGISTER
        </Box>
        <Box
          marginRight={{ xs: "4px", lg: "10px" }}
          fontSize={{ xs: "12px", lg: "18px" }}
          sx={{ cursor: "pointer" }}
        >
          SIGN IN
        </Box>

        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined />
        </Badge>
      </Grid>
    </Grid>
  );
};

export default Navbar;
