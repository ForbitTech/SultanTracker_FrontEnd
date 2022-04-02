import React from "react";
import { Box, Grid, Typography, Card, Divider } from "@mui/material";
import { AppFeatureData } from "./data";
const AppFeature = () => {
  return (
    <Box>
      <Box
        id="features"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4"> Amazing Features </Typography>
        <Divider
          style={{ width: "50%", backgroundColor: "black", marginTop: 0 }}
        />
        <Typography variant="h6" style={{ marginTop: 5 }}>
          {" "}
          There is no one who loves pain itself, who seeks after it and wants to
          have it,{" "}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        style={{ marginTop: 60, marginLeft: 50 }}
      >
        <Grid
          container
          rowSpacing={5}
          columnSpacing={-35}
          columns={12}
          justifyContent="center"
        >
          {AppFeatureData.map((item,index)=>{
            return(
              <Grid item xs={4}>
            <Card style={{ height: 150, width: 300 }}>
              <Box display="flex" flexDirection="row">
                <Box>
                  <img src={item.image} alt="back" style={{ height: 50, width: 50 ,padding:10}} />{" "}
                </Box>
                <Box>
                  <Typography variant="h6" style={{ marginTop: 10 }}>{item.title}</Typography>
                  <Typography variant="subtitle2" style={{ marginTop: 0, padding:5 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
            )
          })}

          
        </Grid>
      </Box>
    </Box>
  );
};

export default AppFeature;