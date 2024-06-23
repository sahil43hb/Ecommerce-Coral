import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Style/swiperStyle.css";
import ProductCard from "../../components/common/ProductCard";
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
              <ProductCard
                key={index}
                image={data.image}
                isSale={data.isSale}
                isHot={data.isHot}
                productName={data.productName}
                price={data.price}
                disPrice={data.discountPrice}
                category={data.category}
                type={data.type}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {products.length === 0 && (
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Not Data Found
          </Typography>
        </Grid>
      )}
    </>
  );
}
