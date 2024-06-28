import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Ribbon from "../common/Ribbon";
import { CardMedia } from "../CardMedia";
import { palette } from "../../theme/Palette";
import BottomHoverShopBadge from "../common/BottomHoverShopBadge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "../../Style/swiperStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductCard = ({ productData }) => {
  if (!productData) {
    return (
      <Typography
        variant="h4"
        sx={{ textAlign: "center", color: palette.black[300] }}
      >
        Loading...
      </Typography>
    );
  }
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
        {productData.isSale && (
          <Box sx={{ position: "absolute", top: "22px" }}>
            <Ribbon color={palette.black.main} title="Sale" />
          </Box>
        )}
        {productData.isHot && (
          <Box sx={{ position: "absolute", top: "22px" }}>
            <Ribbon color={palette.primary.main} title="Hot" />
          </Box>
        )}
        <CardMedia image={productData.image} sx={{ height: "400px" }} />
        <BottomHoverShopBadge
          isCart={productData.isCart}
          isFav={productData.isFavorite}
          id={productData.id}
        />
      </Box>
      <Box sx={{ px: 1 }}>
        <Typography variant="h6" sx={{ pb: 1.5, pt: 2 }}>
          {productData.productName}
        </Typography>
        <Stack direction="row" sx={{ justifyContent: "space-between", pb: 1 }}>
          <Typography
            variant="span-regular"
            sx={{ color: "rgba(0, 0, 0, 0.5)" }}
          >
            {productData.type}
          </Typography>
          <Box>
            <Typography
              variant="span-semibold"
              sx={{
                color: productData.discountPrice
                  ? palette.dark[300]
                  : palette.dark.main,
                textDecoration: productData.discountPrice
                  ? "line-through"
                  : "auto",
              }}
            >
              ${productData.price}
            </Typography>
            {productData.discountPrice && (
              <Typography
                variant="span-semibold"
                sx={{ color: palette.primary.main, pl: 1 }}
              >
                ${productData.discountPrice}
              </Typography>
            )}
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

export const ShowProductData = ({ products }) => {
  return (
    products &&
    products.map((data, index) => (
      <ProductCard key={data.id} productData={data} />
    ))
  );
};
export const ShowProductDataSlider = ({ products }) => {
  return (
    products && (
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
      >
        {products.map((data, index) => (
          <SwiperSlide key={index}>
            <ProductCard key={index} productData={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};
