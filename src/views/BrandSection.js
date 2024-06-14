import { Grid, Container } from "@mui/material";
import React from "react";
import { ImageSectionData } from "../utilities/data/ImageSectionData";
import CardMedia from "../components/common/CardMedia";
import { flexDisplay } from "../utilities/contants";

const ImageSection = () => {
  return (
    <Container maxwidth="md" sx={{ pt: 8, pb: 3 }}>
      <Grid sx={{ ...flexDisplay }}>
        {ImageSectionData.map((data, index) => (
          <CardMedia
            key={index}
            image={data.image}
            sx={{ width: "200px", height: "70px" }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ImageSection;
