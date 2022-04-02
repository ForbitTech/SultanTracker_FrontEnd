import React from "react";
import { Typography, Box, Card, Avatar, Grid, Divider } from "@mui/material";

import { Link, animateScroll as scroll } from "react-scroll";
import { OurServiceData } from "../component/data";
const OurService = () => {
  return (
    <Box>
      <Box
        id="features"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h5"> Our Features </Typography>
        <Divider
          style={{ width: "50%", backgroundColor: "black", marginTop: 0 }}
        />
        <Typography variant="h6" style={{ fontSize: 9 }}>
          There is no one who loves pain itself, who seeks after it and wants to
          have it.
        </Typography>
      </Box>
      <Box style={{ margin: 5, marginLeft: 15, marginTop: 60 }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={-5}
          style={{
            width: "100%",
          }}
        >
          {OurServiceData.map((item, index) => {
            return (
              <Grid
                item
                xs={2.4}
                key={index}
                style={{
                  marginTop: index % 2 === 0 ? -10 : null,
                }}
              >
                <Card style={{ width: 65, height: 50 }} elevation={5}>
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
                      justifyContent="center"
                    >
                      <Box>
                        <Avatar
                          src={item.image}
                          style={{
                            width: 40,
                            height: 40,
                            marginLeft: 12,
                            overflow: "hidden",
                          }}
                        ></Avatar>{" "}
                      </Box>
                      <Typography
                        alignItems="center"
                        style={{ fontSize: 6, marginLeft: 13 }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Link>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurService;
