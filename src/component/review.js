import React, { Component } from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  Typography,
  CardHeader,
  CardContent,
  Avatar,
  Divider,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewData } from "./data";
import { grey } from "@mui/material/colors";
import { Rating } from "@mui/material";
export default class Fag extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <Box id="review" style={{ padding: 50, marginTop: 50 }}>
        <Box>
          <Typography style={{ textAlign: "center" }} variant="h4">
            Customer Reviews
          </Typography>
          <Divider
            style={{
              width: "50%",
              backgroundColor: "black",
              marginBottom: 20,
              marginLeft: 300,
            }}
          />
        </Box>

        <div
          style={{
            width: "100%",
            height: 300,
            overflow: "hidden",
            marginTop: 10,
          }}
        >
          <Slider {...settings}>
            {ReviewData.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    width: "100%",
                    height: 400,
                    marginTop: 20,
                  }}
                >
                  <Box display="flex" justifyContent="center">
                    <Card
                      elevation={5}
                      style={{
                        width: 300,
                        height: 250,
                        backgroundColor: index % 2 === 0 ? grey[200] : "white",
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        style={{ marginTop: 10 }}
                      >
                        <Avatar
                          src={item.image}
                          alt="review"
                          style={{
                            marginTop: 10,
                            marginLeft: 15,
                            borderRadius: 4,
                          }}
                        />
                        <Box style={{ margin: 10 }}>
                          <Typography>{item.name}</Typography>{" "}
                        </Box>
                      </Box>

                      <CardContent style={{ height: 100 }}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.review}
                        </Typography>
                      </CardContent>
                      <Box
                        display="flex"
                        flexDirection="row"
                        style={{  margin: 15 }}
                      >
                        <Typography variant="body2">
                          Best Ui/Ux Design
                        </Typography>
                        <Rating
                          style={{ marginLeft: 15, height: 10, marginTop: -2 }}
                          defaultValue={5}
                        />
                      </Box>
                    </Card>
                  </Box>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Box>
    );
  }
}
