import React from "react";
import { Typography, Box, Card, Grid, Divider, Button } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";

import { PricingData } from "../component/data";
import AOS from "aos";
import "aos/dist/aos.css";
import PricingFeature from "../component/pricingfeature";
AOS.init();
const Pricing = () => {
  return (
    <div data-aos="flip-center">
      <Box
        id="pricing"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" style={{ marginTop: 30 }}>
          {" "}
          Pricing Plans{" "}
        </Typography>
        <Divider
          style={{ width: "50%", backgroundColor: "black", marginBottom: 20 }}
        />
      </Box>

      <Grid
        container
        justifyContent="center"
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        {PricingData.map((item, index) => {
          return (
            // <Grid key={index} item xs={3} style={{ padding: 10 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ height: 600 }}
            >
              <Card
                style={{
                  height: 540,
                  width: 275,
                  backgroundColor: grey[400],
                  marginTop: 25,
                }}
              >
                <Card
                  style={{
                    height: 115,
                    width: "100%",
                    backgroundColor: yellow[900],
                  }}
                ></Card>

                <Box style={{ marginTop: -100 }}>
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "center",
                      color: "#FFFFFF",
                      marginBottom: -5,
                    }}
                  >
                    {item.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      textAlign: "center",
                      // margin: 50,
                      color: "#FFFFFF",
                    }}
                  >
                    {item.Subs}
                  </Typography>
                </Box>
                {console.log(item.data)}
                <PricingFeature doc={item.data} />
                <Button
                  style={{
                    height: 40,
                    width: 150,
                    color: "white",
                    backgroundColor: yellow[900],
                    borderRadius: 20,
                    margin: 20,
                    marginLeft: "22%",
                  }}
                >
                  Buy Now
                </Button>
              </Card>
            </Box>
            // </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Pricing;
