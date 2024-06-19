import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

const EmailSubmit = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={10.5}>
          <TextField
            fullWidth
            placeholder="Email address..."
            size="small"
            variant="standard"
          />
        </Grid>
        <Grid item xs={1.5}>
          <Button variant="text" sx={{ borderBottom: "2px solid" }}>
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmailSubmit;
