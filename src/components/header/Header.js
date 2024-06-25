import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../assets/images/logo.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Grid, Stack, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { headerData } from "../../utilities/data/navbar-data";
import CardMedia from "../common/CardMedia";
import { buttonSx, flexDisplay } from "../../utilities/contants";
import TextLink from "../common/TextLink";
import Divider from "./../common/Divider";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFavProducts } from "../../redux/feature/productSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "#FFFF",
  },
}));

export default function TopAppBar({ type }) {
  const navigate = useNavigate();
  const wishListData = useSelector(getFavProducts);
  const favProLength = wishListData.length;
  const [wishlistProducts, setWishlistProducts] = React.useState(favProLength);
  React.useEffect(() => {
    setWishlistProducts(favProLength);
  }, [wishListData, favProLength]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "none", boxShadow: "none" }}
        >
          <Grid
            sx={{
              ...flexDisplay,
              alignItems: "center",
              pt: 1,
            }}
          >
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
            <Box onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
              <CardMedia sx={{ height: "34px", width: "180px" }} image={logo} />
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => navigate("/wish-list")}
                variant="text"
                sx={{ ...buttonSx }}
                startIcon={
                  <StyledBadge badgeContent={wishlistProducts} color="primary">
                    <FavoriteIcon />
                  </StyledBadge>
                }
              >
                <Box sx={{ pl: 0.7 }}>Wishlist</Box>
              </Button>
              <Button
                onClick={() => navigate("/cart")}
                variant="text"
                sx={{ ...buttonSx }}
                startIcon={
                  <StyledBadge badgeContent={0} color="primary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                }
              >
                <Box sx={{ pl: 0.7 }}>Cart</Box>
              </Button>
            </Stack>
          </Grid>
          {type === "home" && (
            <>
              <Divider type="dark" sx={{ pt: 0.6 }} />
              <Box sx={{ ...flexDisplay, pt: 2 }}>
                {headerData.map((data, index) => (
                  <TextLink key={index} text={data.name} url={data.url} />
                ))}
              </Box>
            </>
          )}
        </AppBar>
      </Box>
    </Container>
  );
}
