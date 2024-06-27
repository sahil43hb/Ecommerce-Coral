import { Container } from "@mui/material";
import React, { Suspense, lazy, useEffect, useState } from "react";
import ExploreSectionSkelton from "./ExploreSectionSkelton";
const ExploreSection = lazy(() => import("./ExploreSection"));

const ExploreNewStyle = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 6, maxWidth: "1372px !important" }}
      id="exploreSection"
    >
      <Suspense fallback={<ExploreSectionSkelton />}>
        <div className={isLoaded ? "fade-in" : ""}>
          <ExploreSection />
        </div>
      </Suspense>
    </Container>
  );
};

export default ExploreNewStyle;
