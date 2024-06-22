import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";
import { palette } from "./../../theme/Palette";
import { getFilterPrice } from "../../utilities/common";
import { ExploreSectionData } from "../../utilities/data/ExploreSection";
import { useDispatch } from "react-redux";
import { setProducts } from "../../feature/product/productSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 4,
  py: 3,
};
const initialFilterCategory = [
  { id: 1, title: "Pant", category: "pant", isSelected: true },
  { id: 2, title: "Coat", category: "coat", isSelected: true },
  { id: 3, title: "Shirt", category: "shirt", isSelected: true },
  { id: 4, title: "Jacket", category: "jacket", isSelected: true },
  { id: 5, title: "Dress", category: "dress", isSelected: true },
  { id: 6, title: "Glasses", category: "glasses", isSelected: true },
  { id: 7, title: "Bag", category: "bag", isSelected: true },
  { id: 8, title: "Shoe", category: "shoe", isSelected: true },
];

export default function FilterModal({ openModel, handleCloseModel }) {
  const dispatch = useDispatch();
  const [filterCategory, setFilterCategory] = React.useState(
    initialFilterCategory
  );
  const [value, setValue] = React.useState([20, 37]);
  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleFilterSubmit = () => {
    const data = getFilterPrice(value, ExploreSectionData);
    console.log(data);
    dispatch(setProducts(data));
    handleCloseModel();
    setValue([20, 37]);
    setFilterCategory(initialFilterCategory);
  };
  const handleCategoryFilter = (id) => {
    setFilterCategory((prevCat) =>
      prevCat.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
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
            <Box sx={{ pt: 2 }}>
              <Typography variant="h5" sx={{ pb: 1.5 }}>
                Category
              </Typography>
              <Box>
                {filterCategory.map((item, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    size="small"
                    sx={{
                      background: item.isSelected
                        ? palette.primary.main
                        : "none",
                      color: item.isSelected ? palette.white.main : "none",
                      mr: 1,
                      mb: 1,
                    }}
                    onClick={() => handleCategoryFilter(item.id)}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", pt: 5 }}
            >
              <Button
                onClick={handleCloseModel}
                variant="contained"
                size="small"
              >
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
        </Box>
      </Modal>
    </Box>
  );
}
