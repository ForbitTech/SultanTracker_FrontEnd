import { Box, Grid, Typography, Card } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { FeatureData } from "./data";
import "aos/dist/aos.css";
import AOS from "aos";
import Topsvg from "../images/topsvg.svg";
import Downsvg from "../images/bottomsvg.svg";
import "./index.css";
AOS.init();

const Feature = () => {
  return (
    <Box style={{ width: "100%" }}>
      <Grid>
        {FeatureData.map((item, index) => {
          return (
            <Box
              id={item.title}
              data-aos={item.animation}
              display="flex"
              style={{
                color: grey[900],
                marginBottom: -4,
                width: "100%",
                height: "auto",
                backgroundColor: index % 2 === 0 ? "white" : grey[0],
                backgroundImage:
                  index % 2 === 0 ? `url(${Topsvg})` : `url(${Downsvg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Box
                display="flex"
                flexGrow="1"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                style={{ maxWidth: "50%", minWidth: "50%" }}
                order={2}
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={item.image}
                  style={{ height: 400, width: "80%" }}
                  alt="sultantracker"
                />
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                flexGrow="1"
                alignItems="center"
                justifyContent="center"
                style={{ padding: 40 }}
                order={index % 2 === 0 ? 3 : 1}
              >
                <Box style={{ height: 300, backgroundColor: "transparent" }}>
                  <Typography
                    variant="h4"
                    style={{ color: grey[900], margin: 40 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      margin: 40,
                      color: "black",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Feature;
