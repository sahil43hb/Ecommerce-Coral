import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TabButton from "../../components/common/TabButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ExploreSectionData } from "../../utilities/data/ExploreSection";
import ProductCard from "../../components/common/ProductCard";

const categories = [
  { title: "All Products" },
  { title: "T-Shirt" },
  { title: "Hoodies" },
  { title: "Jacket" },
];

const SubscribeNewslatter = () => {
  const [selected, setSelected] = useState("All Products");
  return (
    <Container maxwidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" textAlign="center">
        Or Subscribe To The Newsletter
      </Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", pt: 5, pb: 3 }}
      >
        <Box spacing={2}>
          {categories.map((data, index) => (
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
          Filter
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {ExploreSectionData.map((data, index) => (
          <ProductCard
            key={index}
            image={data.image}
            isSale={data.isSale}
            isHot={data.isHot}
            productName={data.productName}
            price={data.price}
            disPrice={data.discountPrice}
            category={data.category}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default SubscribeNewslatter;
