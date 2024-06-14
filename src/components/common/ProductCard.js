import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Ribbon from "./Ribbon";
import CardMedia from "./CardMedia";
import { palette } from "../../theme/Palette";
import BottomHoverShopBadge from "./BottomHoverShopBadge";

const ProductCard = ({
  image,
  isSale,
  isHot,
  productName,
  price,
  disPrice,
  category,
}) => {
  return (
    <Grid item xs={3} sx={{ position: "relative" }}>
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
        {isSale && (
          <Box sx={{ position: "absolute", top: "22px" }}>
            <Ribbon color={palette.black.main} title="Sale" />
          </Box>
        )}
        {isHot && (
          <Box sx={{ position: "absolute", top: "22px" }}>
            <Ribbon color={palette.primary.main} title="Hot" />
          </Box>
        )}
        <CardMedia image={image} sx={{ height: "312px" }} />
        <BottomHoverShopBadge />
      </Box>
      <Box sx={{ px: 1 }}>
        <Typography variant="h6" sx={{ pb: 1.5, pt: 2 }}>
          {productName}
        </Typography>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="Span-3" sx={{ color: "rgba(0, 0, 0, 0.5)" }}>
            {category}
          </Typography>
          <Box sx={{}}>
            <Typography
              variant="Span"
              sx={{
                color: disPrice ? palette.dark[300] : palette.dark.main,
                textDecoration: disPrice ? "line-through" : "auto",
              }}
            >
              {price}
            </Typography>
            <Typography
              variant="Span"
              sx={{ color: palette.primary.main, pl: 1 }}
            >
              {disPrice}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

export default ProductCard;
