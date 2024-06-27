import { Container } from "@mui/material";
import React, { Suspense, lazy, useEffect, useState } from "react";
import BrandSkelton from "./BrandSkelton";
const BrandSectionImg = lazy(() => import("./BrandSection"));

const BrandSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 3 }} id="brandSection">
      <Suspense fallback={<BrandSkelton />}>
        <div className={isLoaded ? "fade-in" : ""}>
          <BrandSectionImg />
        </div>
      </Suspense>
    </Container>
  );
};

export default BrandSection;
