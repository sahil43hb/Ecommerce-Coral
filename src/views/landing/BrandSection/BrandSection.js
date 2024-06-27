import React from "react";
import { ImageSectionData } from "../../../utilities/data/ImageSectionData";
import { CardMedia } from "../../../components/CardMedia";
import { Stack } from "@mui/material";

const BrandSectionImg = () => {
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      {ImageSectionData.map((data, index) => (
        <CardMedia
          key={index}
          image={data.image}
          sx={{ width: "200px", height: "70px" }}
        />
      ))}
    </Stack>
  );
};

export default BrandSectionImg;
