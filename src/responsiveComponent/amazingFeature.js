import React from "react";
import { Box, Grid, Typography, Card, Divider } from "@mui/material";
import { AppFeatureData } from "../component/data";
const AmazingFeature = () => {
  return (
    <Box>
      <Box
        id="features"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h5"> Amazing Features </Typography>
        <Divider
          style={{ width: "50%", backgroundColor: "black", marginTop: 0 }}
        />
        <Typography variant="h6" style={{ fontSize: 9 }}>
          There is no one who loves pain itself, who seeks after it and wants to
          have it.
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        style={{ marginTop: 60, margin: 10 }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {AppFeatureData.map((item, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Card>
                  <Box display="flex" flexDirection="row">
                    <Box>
                      <img
                        src={item.image}
                        alt="back"
                        style={{ height: 20, width: 20, padding: 10 }}
                      />{" "}
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          marginTop: 10,
                          fontSize: 6,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ marginTop: 0, padding: 5, fontSize: 5 }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default AmazingFeature;
