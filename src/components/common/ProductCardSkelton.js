import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import CustomSkelton from "../CustomSkelton/CustomSkelton";

const OurProductSkelton = ({ length }) => {
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{
          height: "1020px",
        }}
      >
        {Array.from({ length: length }).map((data, index) => (
          <Grid key={index} item xs={3} sx={{ position: "relative" }}>
            <CustomSkelton sx={{ height: "380px" }} />

            <Box sx={{ px: 0.6 }}>
              <Box sx={{ pb: 1.5, pt: 2 }}>
                <CustomSkelton sx={{ height: "35px", width: "60%" }} />
              </Box>
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", pb: 1 }}
              >
                <CustomSkelton sx={{ height: "30px", width: "110px" }} />
                <CustomSkelton sx={{ height: "30px", width: "70px" }} />
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OurProductSkelton;
