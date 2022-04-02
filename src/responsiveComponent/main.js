import React from "react";
import Header from "./header";
import OurService from "./ourservice";
import Features from "./features";
import AmazingFeature from "./amazingFeature";
import Screenshot from "./screenshot";
import Pricing from "./pricing";
import TopClients from "./trustedcompany";
import CustomerReview from "./customerReview";
import Manage from "./manage";
import Contact from "./contact";
import Footer from "./footer";
import DeviceAlerts from "./deviceAlerts";
const Main = () => {
  return (
    <div>
      <Header />
      <OurService />
      <Features />
      <AmazingFeature />
      <Screenshot />
      <DeviceAlerts />
      <Pricing />
      <TopClients />
      <CustomerReview />

      {/* <Manage /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Main;
