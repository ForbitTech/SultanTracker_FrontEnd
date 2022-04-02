import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Parallax } from "react-parallax";
import hand from "../images/hand_with_phone.png";

import image1 from "../images/index.jpeg";

export default function Manage() {
  return (
    <div className="Manage" style={{ height: "1000px", marginTop: 10 }}>
      <Parallax bgImage={image1} strength={400}>
        <Box display="flex" flexDirection="row" style={{ height: 400 }}>
          <Box
            style={{
              height: 400,
              width: 450,
              padding: 10,
              marginLeft: 200,
              marginTop: 100,
            }}
          >
            <Typography variant="h4" style={{ color: "black" }}>
              Start Managing Your Apps Business more faster
            </Typography>

            <Typography variant="h8" style={{ color: "black" }}>
              Objectively deliver professional value with diverse
              web-rediness.Collaboratively transition wireless customer service
              without goal oriented catalyst for change,Collaboratively.
            </Typography>

            <Box display="flex" flexDirection="row">
              <Button href="https://play.google.com/store/apps/details?id=com.forbitbd.sultantracker"
                style={{
                  height: 40,
                  width: 150,
                  backgroundColor: "white",
                  borderRadius: 20,
                  margin: 20,
                }}
              >
               Google Play
                
              </Button>
              <Button
                style={{
                  height: 40,
                  width: 150,
                  backgroundColor: "white",
                  borderRadius: 20,
                  margin: 20,
                }}
              >
                App Store
              </Button>
            </Box>
          </Box>
          <Box>
            <img src={hand} alt="hand" style={{ height: "100%" }} />
          </Box>
        </Box>
      </Parallax>
    </div>
  );
}
