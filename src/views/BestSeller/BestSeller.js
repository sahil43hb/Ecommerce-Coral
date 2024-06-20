import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TabButton from "../../components/common/TabButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ExploreSectionData } from "../../utilities/data/ExploreSection";
import { Categories } from "../../utilities/data/DiscountOnInsta";
import BestSellerSwiper from "./BestSellerSwiper";

const BestSeller = () => {
  const [selected, setSelected] = useState("All Products");
  return (
    <Container maxwidth="md" sx={{ py: 15 }}>
      <Typography variant="h2" textAlign="center">
        Best sellers
      </Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", pt: 5, pb: 4 }}
      >
        <Box spacing={2}>
          {Categories.map((data, index) => (
            <TabButton
              key={index}
              title={data.title}
              selected={data.title === selected ? true : false}
              onClick={() => setSelected(data.title)}
              sx={{ mr: 3 }}
            />
          ))}
        </Box>
        <Button variant="contained" size="small" startIcon={<FilterAltIcon />}>
          Show All
        </Button>
      </Stack>
      <BestSellerSwiper products={ExploreSectionData} />
    </Container>
  );
};

export default BestSeller;
