import { Box, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useUpdateFavProducts } from "../../hooks/useProducts";
import CustomTooltip from "./CustomTooltip";

const BottomHoverShopBadge = ({ isFav, id, isCart }) => {
  const { mutate: updateFavProducts, isLoading } = useUpdateFavProducts();
  const handleFavorite = async (props) => {
    updateFavProducts({ id: props.id, isFavorite: props.isFavorite });
  };
  const handleCart = (props) => {
    updateFavProducts({ id: props.id, isCart: props.isCart });
  };

  return (
    <>
      <Box
        className="hoverBadge"
        sx={{
          opacity: 0,
          visibility: "hidden",
          transition: "opacity 0.5s ease-in-out",
          position: "absolute",
          bottom: "0px",
          width: "100%",
        }}
      >
        <Grid
          sx={{
            background: palette.black.main,
            color: palette.white.main,
            height: "52px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack direction="row" sx={{ gap: 4 }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => handleFavorite({ id: id, isFavorite: isFav })}
            >
              {isLoading ? (
                <p>loading</p>
              ) : isFav ? (
                <CustomTooltip title="Remove From Wishlist">
                  <FavoriteIcon sx={{ color: "#FFFF" }} />
                </CustomTooltip>
              ) : (
                <CustomTooltip title="Add To Wishlist">
                  <FavoriteBorderIcon />
                </CustomTooltip>
              )}
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => handleCart({ id: id, isCart: isCart })}
            >
              {isLoading ? (
                <p>loading</p>
              ) : isCart ? (
                <CustomTooltip title="Remove From Cart">
                  <RemoveShoppingCartIcon sx={{ color: "#FFFF" }} />
                </CustomTooltip>
              ) : (
                <CustomTooltip title="Add To Cart">
                  <ShoppingCartIcon />
                </CustomTooltip>
              )}
            </IconButton>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default BottomHoverShopBadge;
