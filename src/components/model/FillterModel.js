import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import { Button, Grid, Tooltip } from "@mui/material";
import { getFilterPrice, getFilteredColor } from "../../utilities/common";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilterProducts,
  setOurProducts,
  getFilterColor,
  getFilteredRange,
  setFilteredColor,
  setFilteredRange,
} from "../../redux/feature/productSlice";
import { palette } from "../../theme/Palette";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  boxShadow: 24,
  px: 4,
  py: 3,
  borderRadius: 1.5,
};
export default function FilterModal({ openModel, handleCloseModel }) {
  const dispatch = useDispatch();
  const filterProducts = useSelector(getFilterProducts);
  const filteredColor = useSelector(getFilterColor);
  const filteredRange = useSelector(getFilteredRange);
  const [filterColor, setFilterColor] = React.useState(filteredColor);
  const [value, setValue] = React.useState(filteredRange);
  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleFilterSubmit = () => {
    const data = getFilterPrice(value, filterProducts);
    const colorData = getFilteredColor(filterColor, data);
    dispatch(setOurProducts(colorData));
    dispatch(setFilteredColor(filterColor));
    dispatch(setFilteredRange(value));
    handleCloseModel();
  };
  const handleColorFilter = (id) => {
    setFilterColor((prevCat) =>
      prevCat.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };
  const filterCloseModel = () => {
    handleCloseModel();
    setFilterColor(filteredColor);
    setValue(filteredRange);
  };

  return (
    <Box>
      <Modal
        open={openModel}
        onClose={handleCloseModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography variant="h5" sx={{ pb: 2 }}>
              Price Range
            </Typography>
            <Slider
              value={value}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={1}
              max={250}
              marks={[
                { value: 1, label: "$1" },
                { value: 250, label: "$250" },
              ]}
            />
          </Box>
          <Grid container sx={{ pt: 2 }}>
            <Typography variant="h5" sx={{ pb: 1.5 }}>
              Select Color
            </Typography>
            <Grid
              container
              gap={2}
              sx={{
                p: 1,
                background: palette.black.light,
                border: "1px solid",
                borderColor: "#cccccc",
                borderRadius: 1,
              }}
            >
              {filterColor.map((item, index) => (
                <Tooltip key={index} title={item.title} placement="top">
                  <Box
                    onClick={() => handleColorFilter(item.id)}
                    sx={{
                      p: 0.1,
                      border: item.isSelected ? "3px solid" : "none",
                      borderRadius: "100%",
                      height: "22px",
                      width: "22px",
                    }}
                  >
                    <Box
                      sx={{
                        height: !item.isSelected ? "26px" : "20px",
                        width: !item.isSelected ? "26px" : "20px",
                        background: item.color,
                        borderRadius: "100%",
                        ml: "1px",
                        mt: "1px",
                      }}
                    ></Box>
                  </Box>
                </Tooltip>
              ))}
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-between", pt: 5 }}>
            <Button onClick={filterCloseModel} variant="contained" size="small">
              Close
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={handleFilterSubmit}
            >
              Filter
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}