import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { palette } from "../../theme/Palette";
import Divider from "../../components/Divider/Divider";
import { calculateAmount } from "../../utilities/common";

const TotalSubSection = ({ title, amount, variant }) => {
  return (
    <Box sx={{ background: palette.black.light, p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant={variant ? "h4" : "h5"}>{title}</Typography>
        <Typography variant="h5" sx={{ color: palette.black[300] }}>
          ${amount}
        </Typography>
      </Stack>
    </Box>
  );
};

const TotalSection = ({ cartlistData }) => {
  const [total, setTotal] = useState();
  useEffect(() => {
    const totalAmount = calculateAmount(cartlistData);
    setTotal(totalAmount);
  }, [cartlistData]);

  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <TotalSubSection title="Sub Total" amount={total?.toFixed(2)} />
      <Divider type="dark" />
      <TotalSubSection title="Delivery Charges" amount="10" />
      <Divider type="dark" />
      <TotalSubSection
        title="Total"
        amount={(total + 10).toFixed(2)}
        variant={true}
      />
    </Box>
  );
};

export default TotalSection;
