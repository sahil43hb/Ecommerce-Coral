import React from "react";
import { Grid } from "@mui/material";

import CustomSkelton from "../../../components/CustomSkelton/CustomSkelton";

const ExploreSectionSkelton = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6.4} sx={{ pl: "50px !important" }}>
        <CustomSkelton sx={{ height: "648px", width: "648px" }} />
      </Grid>
      <Grid item xs={5.6}>
        <Grid container spacing={3}>
          {Array.from({ length: 4 }).map((data, index) => (
            <Grid item xs={6} key={index}>
              <CustomSkelton sx={{ height: "312px" }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExploreSectionSkelton;
