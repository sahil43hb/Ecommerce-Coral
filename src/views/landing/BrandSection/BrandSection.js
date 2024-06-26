import { Container, Stack } from "@mui/material";
import React from "react";
import { ImageSectionData } from "../../../utilities/data/ImageSectionData";
import { CardMedia } from "../../../components/CardMedia";

const BrandSection = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 3 }} id="brandSection">
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        {ImageSectionData.map((data, index) => (
          <CardMedia
            key={index}
            image={data.image}
            sx={{ width: "200px", height: "70px" }}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default BrandSection;
