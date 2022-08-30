import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

import Banner from "./Banner/Banner";
import OfferCardContainer from "./OfferCards/OfferCardContainer";

function Home() {
  return (
    <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: { xs: "100%", lg: "60vw" } }}>
            <Typography variant="h4">Here's Whats available</Typography>
            <OfferCardContainer />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
