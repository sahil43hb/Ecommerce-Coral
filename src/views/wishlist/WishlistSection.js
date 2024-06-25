import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { palette } from "../../theme/Palette";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavProducts,
  getOurProducts,
  setFavoriteProducts,
  setOurProducts,
} from "../../redux/feature/productSlice";
import { wishListHeader } from "../../utilities/data/tableHeaderListData";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import CustomTooltip from "../../components/common/CustomTooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useUpdateFavProducts } from "../../hooks/useProducts";

const WishlistSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: updateFavProducts,
    isLoading,
    isSuccess,
  } = useUpdateFavProducts();
  const wishListData = useSelector(getFavProducts);
  console.log(wishListData, "wish");
  const wishListProductData = useSelector(getOurProducts);
  const [wishlistData, setWishlistData] = useState(wishListData);
  useEffect(() => {
    setWishlistData(wishListData);
  }, [wishListData, isSuccess]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };
  const handleDeleteFav = (id) => {
    const filterFavData = wishListData.filter((item) => item.id !== id);
    dispatch(setFavoriteProducts(filterFavData));
    let wishlistDataProduct = wishListProductData.map((data) =>
      data.id === id ? { ...data, isFavorite: !data.isFavorite } : data
    );
    dispatch(setOurProducts(wishlistDataProduct));
  };

  const handleCart = (props) => {
    updateFavProducts({ id: props.id, isCart: props.isCart });
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 12 }}>
      <Typography variant="h2" textAlign="center">
        Wish List
      </Typography>
      <Box sx={{ pt: 8, pb: 2 }}>
        <TableContainer
          sx={{ border: "2px solid", borderColor: palette.black.light }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {wishListHeader.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      py: 3,
                      textAlign: "center",
                      fontWeight: "bold !important",
                    }}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {wishlistData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ py: 3 }}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell sx={{ textAlign: "center" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <img
                        alt="not"
                        src={row.image}
                        style={{
                          width: "120px",
                          height: "60px",
                          borderRadius: 8,
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.productName}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.type}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.discountPrice ? row.discountPrice : row.price}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <CustomTooltip title="Delete">
                        <IconButton onClick={() => handleDeleteFav(row.id)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </CustomTooltip>
                      <IconButton
                        color="inherit"
                        onClick={() =>
                          handleCart({ id: row.id, isCart: row.isCart })
                        }
                      >
                        {row.isCart ? (
                          <CustomTooltip title="Remove To Cart">
                            <RemoveShoppingCartIcon />
                          </CustomTooltip>
                        ) : (
                          <CustomTooltip title="Add To Cart">
                            <ShoppingCartIcon />
                          </CustomTooltip>
                        )}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={wishlistData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          startIcon={<EastIcon sx={{ transform: "rotate(180deg)" }} />}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          endIcon={<EastIcon />}
          onClick={() => navigate("/cart")}
        >
          Go To Cart
        </Button>
      </Stack>
    </Container>
  );
};

export default WishlistSection;
