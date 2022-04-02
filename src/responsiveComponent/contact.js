import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [disable, setdisable] = useState(true);

  const handleChange = (e) => {
    const newContact = { ...contact };
    newContact[e.target.name] = e.target.value;

    newContact.name !== "" &&
    newContact.email !== "" &&
    newContact.mobile !== "" &&
    newContact.message !== ""
      ? setdisable(false)
      : setdisable(true);
    setContact(newContact);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        width: 400,
        margin: 10,
        justifyContent: "center",
      }}
    >
      <Box style={{ height: 280, marginTop: 30 }}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Contact With Us
        </Typography>
        <Typography style={{ marginTop: 15, marginBottom: 0 }} variant="h6">
          Dhaka Office
        </Typography>
        <Typography variant="h8">
          242/2, Ahmed Nagar, Pikepara, Mirpur-1,
          <br /> Dhaka-1216, Bangladesh. <br /> Customer Care: +8801313343311{" "}
          <br /> Sales: +8801812266644 <br /> Corporate: +8801313343300
        </Typography>

        <Typography style={{ marginTop: 15, marginBottom: 0 }} variant="h6">
          Chattagram Office
        </Typography>
        <Typography variant="h8">
          R/A, Shantidhara, Khulshi-2140,
          <br /> Chattagram, Bangladesh. <br /> Customer Care: +8801313343311{" "}
          <br /> Sales: +8801518378803 <br /> Corporate: +8801812266644
        </Typography>
      </Box>

      <Box style={{ height: 300, marginTop: 100 }}>
        <Typography variant="h5">Reach Us Quickly</Typography>

        <Box>
          <Box display="flex" flexDirection="column" style={{ marginTop: 40 }}>
            <Box display="flex" flexDirection="column">
              <TextField
                style={{ width: 350 }}
                variant="outlined"
                label="Name"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
            </Box>
            <Box display="flex" flexDirection="column" style={{ marginTop: 5 }}>
              <TextField
                style={{ width: 350 }}
                variant="outlined"
                label="Mobile"
                name="mobile"
                value={contact.mobile}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box display="flex" style={{ marginTop: 10 }}>
            <Box
              display="flex"
              flexDirection="column"
              flexGrow="1"
              style={{ marginTop: -5 }}
            >
              <TextField
                style={{ width: 350 }}
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box display="flex" style={{ marginTop: 50 }}>
            <Box display="flex" flexDirection="column" style={{ width: 300 }}>
              <textarea
                style={{ marginTop: -32, width: 345, height: 100 }}
                variant="outlined"
                label="Message"
                name="message"
                value={contact.message}
                onChange={handleChange}
              ></textarea>
              <Button
                style={{ marginTop: 10, width: 80 }}
                variant="contained"
                color="primary"
                // disabled={disable}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
