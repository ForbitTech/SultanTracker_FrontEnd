import React from "react";
import { Box, Typography, Divider } from "@mui/material";
//
const Footer = () => {
  return (
    <Box
      id="contact"
      display="flex"
      flexDirection="column"
      className="shape-top"
      style={{ marginTop: 10 }}
    >
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 310">
          <path
            fill="#F18905"
            fill-opacity="0.9"
            d="M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,96C672,117,768,139,864,154.7C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>

      {/* <Box style={{ marginLeft: 30, marginTop: "-26vh" }}></Box> */}

      {/* <Typography
        variant="subtitle1"
        style={{ color: "black", marginTop: -30,width: }}
      >
        &#169;Copyrights 2022 Sultan Tracker All rights reserved
      </Typography> */}
    </Box>
  );
};

export default Footer;
