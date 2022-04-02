import React from "react";
import Nav from "./navbar";
import Header from "./header";
import Feature from "./feature";
import OurService from "./services";
import Screenshot from "./screenshots";
import Pricing from "./pricing";
import TopClients from "./client";
import Team from "./team";
import Footer from "./footer";
import Manage from "./manage";
import Contact from "./contact";
import ReviewData from "./review";
import { Box } from "@mui/material";
import AppFeature from "./appFeature";
import UpNavbar from "./upNavbar";
import DeviceAlert from "./deviceAlerts";
import Fence from "./svganimation/fence";
const Main = () => {
  return (
    <div>
      <Nav />
      <UpNavbar />

      <Header />

      <OurService />
      <Feature />
      <AppFeature />
      <Screenshot />
      <DeviceAlert />
      <Pricing />
      <TopClients />
      <ReviewData />
      <Team />
      <Manage />
      <Contact />
      <Box style={{ marginTop: 200 }}>
        <Footer />
      </Box>
    </div>
  );
};

export default Main;
