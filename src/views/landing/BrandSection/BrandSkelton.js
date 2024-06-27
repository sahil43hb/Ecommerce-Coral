import React from "react";
import CustomSkelton from "../../../components/CustomSkelton/CustomSkelton";
import { Stack } from "@mui/material";

const BrandSkelton = () => {
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      {Array.from({ length: 5 }).map((data, index) => (
        <CustomSkelton
          key={index}
          sx={{ mr: 1, width: "200px", height: "70px" }}
        />
      ))}
    </Stack>
  );
};

export default BrandSkelton;
