import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography, Card, Divider, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
// import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { yellow } from "@mui/material/colors";

import { TeamData } from "./data";
import "./team.css";
export default class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div
        id="marginTop"
        style={{
          width: 1000,
          height: 500,
          overflow: "hidden",
          padding: 20,
          marginLeft: "12%",
        }}
      >
        <Typography style={{ marginLeft: 350, marginBottom: 10 }} variant="h4">
          Meet Our Team
        </Typography>
        <Divider
          style={{
            width: "50%",
            backgroundColor: "black",
            marginBottom: 20,
            marginLeft: 220,
          }}
        />

        <Slider {...settings}>
          {TeamData.map((item, index) => {
            return (
              <div>
                <Card
                  elevation={5}
                  key={index}
                  style={{
                    height: 300,
                    width: 200,
                    margin: 10,
                    backgroundColor:  yellow[900],
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <img
                      src={item.image}
                      alt="team"
                      style={{
                        borderRadius: 0,
                        margin: 0,
                        marginTop: 0,
                        width: 200,
                        height: 200,
                      }}
                    ></img>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color:'white',
                        marginTop:7,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ textAlign: "center", marginTop: -5, color:'white' }}
                    >
                      {item.post}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    style={{marginTop:8}}
                  >
                    <IconButton className="Card" style={{margin:0, color: 'white'}} href={item.flink}>
                      
                      <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton className="Card" style={{margin:0, color: 'white'}}>
                    {/* {item.elink} */}
                      <EmailIcon />
                    </IconButton>
                    
                    <IconButton className="Card" style={{margin:0, color: 'white'}}>
                    {/* {item.mlink} */}
                      <PhoneIphoneIcon />
                    </IconButton>
                  </Box>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}








// {/* <IconButton className="Card" style={{margin:0, color: 'white'}}>
//                     {/* {item.glink} */}
//                       <GitHubIcon />
//                     </IconButton> */}