import {
  Box,
  Button,
  Container,
  IconButton,
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
  getOurProducts,
  setOurProducts,
} from "../../redux/feature/productSlice";
import EastIcon from "@mui/icons-material/East";
import { cartListHeader } from "../../utilities/data/tableHeaderListData";
import { useNavigate } from "react-router-dom";
import CustomTooltip from "../../components/common/CustomTooltip";
import QuantityCounter from "./QuantityCounter";
import { useGetProducts } from "../../hooks/useGetProduct";
import TotalSection from "./TotalSection";
import { notDataFoundborder } from "../../utilities/contants";

const CartSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector(getOurProducts);
  const { data, refetch } = useGetProducts("isCart");
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
    let allProductsData = allProducts.map((data) =>
      data.id === id ? { ...data, isCart: !data.isCart, quantity: 1 } : data
    );
    dispatch(setOurProducts(allProductsData));
  };
  //Refetch Data
  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [allProducts]);
  const cartlistData = data === undefined ? [] : data;

  return (
    <Container maxWidth="lg" sx={{ pt: 12 }}>
      <Typography variant="h2" textAlign="center">
        Cart
      </Typography>
      <Box sx={{ pt: 8, pb: 2 }}>
        {cartlistData.length !== 0 ? (
          <TableContainer sx={{ ...notDataFoundborder }}>
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
                {cartlistData
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
                        ${row.discountPrice ? row.discountPrice : row.price}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <QuantityCounter row={row} />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        $
                        {(
                          (row.discountPrice ? row.discountPrice : row.price) *
                          row.quantity
                        ).toFixed(2)}
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
              count={cartlistData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        ) : (
          <Box sx={{ ...notDataFoundborder, py: 8, mb: 1 }}>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", color: palette.black[300] }}
            >
              No Cart Data found
            </Typography>
          </Box>
        )}
      </Box>
      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        startIcon={<EastIcon sx={{ transform: "rotate(180deg)" }} />}
      >
        Back
      </Button>
      <TotalSection cartlistData={cartlistData} />
    </Container>
  );
};

export default CartSection;
