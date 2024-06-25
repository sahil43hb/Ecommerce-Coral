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
  Tooltip,
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
import { wishListHeader } from "../../utilities/data/wishListData";
import { useNavigate } from "react-router-dom";

const CartSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishListData = useSelector(getFavProducts);
  const wishListProductData = useSelector(getOurProducts);
  const [wishlistData, setWishlistData] = useState(wishListData);
  useEffect(() => {
    setWishlistData(wishListData);
  }, [wishListData]);
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

  return (
    <Container maxWidth="lg" sx={{ pt: 12 }}>
      <Typography variant="h2" textAlign="center">
        Cart
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
                      <Tooltip title="Delete" placement="top">
                        <IconButton onClick={() => handleDeleteFav(row.id)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Tooltip>
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
      <Stack direction="row">
        <Button variant="outlined" onClick={() => navigate("/")}>
          Back
        </Button>
      </Stack>
    </Container>
  );
};

export default CartSection;
