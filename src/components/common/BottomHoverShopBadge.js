import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUpdateFavProducts } from "../../hooks/useProducts";

const BottomHoverShopBadge = ({ isFav, id, isCart }) => {
  const { mutate: updateFavProducts, isLoading } = useUpdateFavProducts();
  const handleFavorite = async (props) => {
    console.log(props);
    updateFavProducts({ id: props.id, isFavorite: props.isFavorite });
  };
  const handleCart = (props) => {
    console.log(props, "props");
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
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          <Stack direction="row">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => handleFavorite({ id: id, isFavorite: isFav })}
            >
              {isLoading ? (
                <p>loading</p>
              ) : isFav ? (
                <FavoriteIcon sx={{ color: "#FFFF" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </Stack>
          <Button
            onClick={() => handleCart({ id: id, isCart: isCart })}
            variant="text"
            startIcon={<ShoppingCartIcon />}
            sx={{
              color: "#FFFFFF !important",
              "&:hover": {
                color: "#FF6F61 !important",
                background: "none",
              },
            }}
          >
            Add To Cart
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default BottomHoverShopBadge;
