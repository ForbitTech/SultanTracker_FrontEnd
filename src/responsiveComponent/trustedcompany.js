import React from "react";
import { Box, Typography, Grid, Card, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ClientData } from "../component/data";

const TopClients = () => {
  return (
    <Box id="client">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginTop: 50 }}
      >
        <Typography variant="h4">Trusted By</Typography>
        <Divider
          style={{ width: "50%", backgroundColor: "black", marginBottom: 20 }}
        />
      </Box>

      <Grid container justifyContent="center" spacing={1}>
        {ClientData.map((item, index) => {
          return (
            <Grid
              key={index}
              item
              container
              xs={3}
              style={{ padding: 10, marginTop: 10 }}
            >
              <Card
                elevation={5}
                style={{
                  height: 90,
                  width: "100%",
                  backgroundColor: grey[200],
                }}
              >
                <img
                  src={item.image}
                  alt="client"
                  style={{
                    // padding: 10,

                    width: "100%",
                    height: "100%",
                  }}
                ></img>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopClients;
