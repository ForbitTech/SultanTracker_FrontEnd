import React from "react";
import { Box, Typography } from "@mui/material";
import { FeatureData } from "../component/data";
import AOS from "aos";
const Features = () => {
  return (
    <Box style={{ marginTop: 50 }}>
      {FeatureData.map((item, index) => {
        return (
          <Box
            id={item.title}
            display="flex"
            flexDirection="column"
            key={index}
            style={{ margin: 20 }}
          >
            <Box>
              <Typography style={{ fontWeight: "bold", fontSize: 20 }}>
                {item.title}
              </Typography>
            </Box>
            <Box>
              <Typography>{item.description}</Typography>
            </Box>
            <Box data-aos="fade-up">
              <img src={item.image} style={{ width: "100%" }} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Features;
