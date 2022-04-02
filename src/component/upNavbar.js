import React from "react";
import {AppBar,Toolbar, Box, Typography} from "@mui/material";



const UpNavbar = () => {
  return (
   
    <Box>
    <AppBar
  style={{
    backgroundColor:"black",
    boxShadow: "initial",
    height:30,
    
    
  }}
>
  <Toolbar>
  <Typography style={{ marginTop:-35}}>Customer Care: +8801313343311,</Typography>
  <Typography style={{ marginTop:-35, marginLeft:20}}>Sales: +8801812266644,</Typography>
  <Typography style={{ marginTop:-35, marginLeft:20}}>Bill: +8801313343311</Typography>
  </Toolbar>
</AppBar>
<Toolbar />
</Box>
    
  );
};

export default UpNavbar;