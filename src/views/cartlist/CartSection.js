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
  getCartProducts,
  getOurProducts,
  setOurProducts,
  setCartProducts,
} from "../../redux/feature/productSlice";
import { cartListHeader } from "../../utilities/data/tableHeaderListData";
import { useNavigate } from "react-router-dom";
import CustomTooltip from "../../components/common/CustomTooltip";
import QuantityCounter from "./QuantityCounter";

const CartSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartListData = useSelector(getCartProducts);
  const allProducts = useSelector(getOurProducts);
  const [listData, setListData] = useState(cartListData);
  useEffect(() => {
    setListData(cartListData);
  }, [cartListData]);

  //pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };
  // Delete Cart Item
  const deleteCartItem = (id) => {
    const filterCartData = cartListData.filter((item) => item.id !== id);
    dispatch(setCartProducts(filterCartData));
    let allProductsData = allProducts.map((data) =>
      data.id === id ? { ...data, isCart: !data.isCart } : data
    );
    dispatch(setOurProducts(allProductsData));
  };
  //Quantity Count
  const [count, setCount] = useState(1);
  const quantityInputChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };
  const addQuantity = () => {
    setCount((prev) => prev + 1);
  };
  const subQuantity = () => {
    setCount((prev) => prev - 1);
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
                {cartListHeader.map((column) => (
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
              {listData
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
                      {/* {row.quantity} */}
                      <QuantityCounter
                        count={count}
                        quantityInputChange={quantityInputChange}
                        addQuantity={addQuantity}
                        subQuantity={subQuantity}
                      />
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.discountPrice ? row.discountPrice : row.price}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <CustomTooltip title="Delete">
                        <IconButton onClick={() => deleteCartItem(row.id)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </CustomTooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={listData.length}
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
