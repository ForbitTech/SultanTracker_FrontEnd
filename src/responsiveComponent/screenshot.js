import React, { useState } from "react";
import { Typography, Divider } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slide0 from "../screenshots/signup.jpg";
import Slide1 from "../screenshots/signin.jpg";
import Slide2 from "../screenshots/map.jpg";
import Slide3 from "../screenshots/dis_vs_hr.jpg";
import Slide4 from "../screenshots/shared_user.jpg";
import Slide5 from "../screenshots/control.jpg";
import Slide6 from "../screenshots/vehicle_information.jpg";
import Slide7 from "../screenshots/direction.jpg";
import Slide8 from "../screenshots/dashboard.jpg";
import Slide9 from "../screenshots/customer_service.jpg";
import Slide10 from "../screenshots/company_information.jpg";
import Slide11 from "../screenshots/alerts.jpg";
import Slide12 from "../screenshots/language_setting.jpg";
import Slide13 from "../screenshots/settings.jpg";
import Slide14 from "../screenshots/profile.jpg";

const sliderImagges = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
];

const names = [
  "SignUp",
  "SignIn",
  "Map",
  "Daily Report",
  "Shared User",
  "Control",
  "Vehicle Information",
  "Direction",
  "Dashboard",
  "Customer Service",
  "Company Information",
  "Alerts",
  "Language Settings",
  "Settings",
  "Profile",
];

const Screenshot = () => {
  const [name, setName] = useState(names[1]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      id="screenshot"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",

        overflow: "hidden",
      }}
    >
      <Typography variant="h4" style={{ marginTop: 65 }}>
        {" "}
        ScreenShot
      </Typography>
      <Divider
        style={{ width: "50%", backgroundColor: "black", marginBottom: 20 }}
      />

      <Typography variant="h6" style={{ padding: 10 }}>
        {name}
      </Typography>

      <div style={{ width: "70%" }}>
        <Slider
          afterChange={(index) =>
            setName((old) => names[(index + 1) % names.length])
          }
          {...settings}
        >
          {sliderImagges.map((img, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={img} alt="screenshots" style={{ height: 500 }} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Screenshot;
