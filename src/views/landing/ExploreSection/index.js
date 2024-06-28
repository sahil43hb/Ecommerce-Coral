import { Box, Container } from "@mui/material";
import React, { Suspense, lazy } from "react";
import ExploreSectionSkelton from "./ExploreSectionSkelton";
const ExploreSection = lazy(() => import("./ExploreSection"));

const ExploreNewStyle = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 6, maxWidth: "1372px !important" }}
      id="exploreSection"
    >
      <Suspense fallback={<ExploreSectionSkelton />}>
        <Box className="fade-in">
          <ExploreSection />
        </Box>
      </Suspense>
    </Container>
  );
};

export default ExploreNewStyle;
