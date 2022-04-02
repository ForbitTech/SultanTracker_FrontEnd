import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Nav from "./nav";
import CityDriver from "../images/City_driver.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Header = () => {
  return (
    <Box>
      <Nav />
      <Box display="flex" flexDirection="row" style={{ marginTop: 20 }}>
        <Box display="flex" flexDirection="row" style={{ marginTop: -35 }}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" flexGrow="1">
          <Box style={{ marginLeft: "20%" }}>
            <Typography>Best Vehicle Tracking Solution</Typography>
          </Box>
          <Typography style={{ marginLeft: "57%" }}> In Bangladesh </Typography>
          <Typography style={{ marginLeft: "50%", fontSize: 10 }}>
            For Individual And Corporate
          </Typography>{" "}
        </Box>
      </Box>
      <img
        src={CityDriver}
        alt="hello"
        style={{
          overflow: "hidden",
          maxHeight: 500,
          marginRight: 0,
          marginTop: -20,
        }}
      />
    </Box>
  );
};

export default Header;
