import { Box, Grid } from "@mui/material";
import React from "react";
import { CardMedia } from "../../../components/CardMedia";
import InstagramProductHover from "../../../components/common/InstagramProductHover";
import { DiscountOnInstagram } from "../../../utilities/data/DiscountOnInsta";

const ProductImageSection = () => {
  return (
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
  );
};

export default ProductImageSection;
