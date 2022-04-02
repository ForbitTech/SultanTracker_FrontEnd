import React from "react";
import {AppBar,Toolbar,Button,Grid, Box} from "@mui/material";
import Logo from "../images/logo.svg"
import { Link } from "react-scroll";




const Navbar = () => {
  return (
   
    <Box>
    <AppBar
  style={{
    backgroundColor:"white",
    boxShadow: "f8f6f6",
    height:80,
    marginTop:30,
    
  }}
>
  <Toolbar>
   <Box >
   <img src={Logo} alt="logo" style={{ height: "60px", padding:10}} />
   </Box>

    <Grid
      container
      direction="row"
      justify="flex-end"
      
      style={{marginLeft:350}}
    >
      <Button  style={{color:'black',marginRight:30 }}>
        <Link
          style={{ activeClass: "1px solid black" }}
          activeClass="active"
          to="marginTop"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
      </Button>
      <Button  style={{color:'black',marginRight:30}}>
        <Link
          style={{ activeClass: "1px solid black" }}
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Features
        </Link>
      </Button>

      <Button  style={{color:'black',marginRight:30}}>
        {" "}
        <Link
          activeClass="active"
          to="screenshot"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          ScreenShot
        </Link>
      </Button>

      <Button  style={{color:'black',marginRight:30}}>
        {" "}
        <Link
          activeClass="active"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Pricing
        </Link>
      </Button>
      <Button  style={{color:'black',marginRight:30}}>
        {" "}
        <Link
          activeClass="active"
          to="review"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Review
        </Link>
      </Button>
      <Button  style={{color:'black',marginRight:30}}>
        {" "}
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </Button>
      
    </Grid>
  </Toolbar>
</AppBar>
<Toolbar />
</Box>
    
  );
};

export default Navbar;