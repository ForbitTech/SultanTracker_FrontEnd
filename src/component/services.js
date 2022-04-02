import React, { Fragment } from "react";
import { Typography, Box, Avatar, Grid, Divider } from "@mui/material";

import { Link, animateScroll as scroll } from "react-scroll";

import { grey } from "@mui/material/colors";

import AOS from "aos";
import "aos/dist/aos.css";
import { OurServiceData } from "./data";

AOS.init();
const OurService = () => {
  return (
    <Fragment>
      <Box
        id="features"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4"> Our Features </Typography>
        <Divider
          style={{ width: "50%", backgroundColor: "black", marginTop: 0 }}
        />
        <Typography variant="h6">
          {" "}
          There is no one who loves pain itself, who seeks after it and wants to
          have it,{" "}
        </Typography>
      </Box>

      <Box style={{ marginTop: 50, padding: 20, margin: 20 }}>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={-5}
          style={{
            width: "100%",
            // overflow: "hidden",
            height: 400,
            marginTop: 50,
            padding: 10,
            margin: 20,
            marginLeft: 20,
          }}
        >
          {OurServiceData.map((item, index) => {
            return (
              <Grid
                item
                xs={2.4}
                key={index}
                data-aos="fade-up"
                style={{
                  marginTop: index % 2 === 0 ? -20 : null,
                  marginLeft: -5,
                }}
              >
                <Link
                  style={{ activeClass: "1px solid #333" }}
                  activeClass="active"
                  to={item.title}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <Box
                      style={{
                        marginTop: -40,
                        height: 120,
                        width: 220,
                        paddingTop: 40,
                        backgroundColor: grey[300],
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Box>
                          <Avatar
                            src={item.image}
                            style={{
                              width: 80,
                              height: 80,
                              overflow: "hidden",
                            }}
                          ></Avatar>
                        </Box>
                        <Typography
                          variant="overline"
                          style={{ fontWeight: "bold" }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default OurService;
