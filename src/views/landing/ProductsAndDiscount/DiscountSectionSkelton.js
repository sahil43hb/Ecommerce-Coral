import { Grid } from "@mui/material";
import React from "react";
import CustomSkelton from "../../../components/CustomSkelton/CustomSkelton";

const DiscountSectionSkelton = () => {
  return (
    <Grid container spacing={1} sx={{ py: 6 }}>
      {Array.from({ length: 6 }).map((data, index) => (
        <Grid item xs={2} key={index}>
          <CustomSkelton width="196" height="196px" />
        </Grid>
      ))}
    </Grid>
  );
};

export default DiscountSectionSkelton;
