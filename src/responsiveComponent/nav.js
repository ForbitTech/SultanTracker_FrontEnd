import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/logo.svg";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <AppBar position="fixed" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="logo" style={{ height: "40px", padding: 10 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
