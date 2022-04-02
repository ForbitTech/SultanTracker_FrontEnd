import React from "react";

import { Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { grey } from "@mui/material/colors";
const PricingFeature = ({ doc }) => {
  return (
    <Box style={{ margin: 10 }}>
      {doc != null ? (
        <Box display="flex" flexDirection="column">
          {doc.map((item, index) => {
            console.log(item);
            return (
              <Box key={index}>
                {item.icon == "CheckCircleIcon" ? (
                  <CheckCircleIcon
                    flexDirection="column"
                    style={{
                      marginTop: 5,
                      marginLeft: 5,
                      color: "green",
                    }}
                  ></CheckCircleIcon>
                ) : (
                  <CancelIcon
                    flexDirection="column"
                    style={{
                      marginTop: 5,
                      marginLeft: 5,
                      color: "red",
                    }}
                  ></CancelIcon>
                )}

                <Box
                  variant="h6"
                  style={{
                    color: "black",
                    marginLeft: 35,
                    marginTop: -30,
                    backgroundColor: grey[400],
                  }}
                >
                  <Typography>{item.info}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : null}
    </Box>
  );
};

export default PricingFeature;
