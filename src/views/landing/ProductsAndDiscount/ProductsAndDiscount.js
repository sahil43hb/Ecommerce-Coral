import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { DiscountOnInstagram } from "../../../utilities/data/DiscountOnInsta";
import { CardMedia } from "../../../components/CardMedia";
import { EmailSubmit } from "../../../components/EmailSubmit";
import InstagramProductHover from "../../../components/common/InstagramProductHover";

const ProductsAndDiscount = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 14, pb: 3 }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Follow Products And Discounts On Instagram
      </Typography>
      <Grid container spacing={2} sx={{ py: 6 }}>
        {DiscountOnInstagram.map((data, index) => (
          <Grid item xs={2} key={index} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "relative",
                "&:hover .hoverBadge": {
                  opacity: 1,
                  visibility: "visible",
                  transition: "opacity 0.5s ease-in-out",
                },
              }}
            >
              <CardMedia image={data.image} />
              <InstagramProductHover />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Or Subscribe To The Newsletter
      </Typography>
      <Box sx={{ py: 8 }}>
        <EmailSubmit />
      </Box>
    </Container>
  );
};

export default ProductsAndDiscount;
