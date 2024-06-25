import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../Style/swiperStyle.css";
import { ProductCard } from "../../../components/ProductCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Grid, Typography } from "@mui/material";

export default function BestSellerSwiper({ products }) {
  return (
    <>
      {products && (
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
      )}
      {products.length === 0 && (
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textAlign: "center", color: "grey" }}>
            Not Data Found
          </Typography>
        </Grid>
      )}
    </>
  );
}
