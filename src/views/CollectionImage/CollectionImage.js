import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../assets/images/CollectionImage.svg";
import ZaraImage from "../../assets/images/Zara.svg";
import ZaraSmallImage from "../../assets/images/ZaraSmall.svg";
import CardMedia from "../../components/common/CardMedia";
import { palette } from "../../theme/Palette";

const CollectionImage = () => {
  return (
    <Grid sx={{ pt: 5 }}>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        height="776px"
        width="100%"
      >
        <Box
          sx={{
            position: "absolute",
            top: "51px",
            right: 0,
          }}
        >
          <CardMedia
            image={ZaraImage}
            sx={{ height: "309px", width: "732px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            width: "80%",
            height: "100%",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: "34%",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              pb: "131px",
              pr: "125px",
            }}
          >
            <CardMedia
              image={ZaraSmallImage}
              sx={{ width: "191px", height: "81px" }}
            />
            <Typography variant="paragraph" sx={{ color: "#FFFF" }}>
              Lustrous yet understated. The new evening wear collection
              exclusively offered at the reopened Giorgio Armani boutique in Los
              Angeles.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: palette.white.main,
                color: palette.black.main,
                width: "237px",
              }}
            >
              See Collection
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default CollectionImage;
