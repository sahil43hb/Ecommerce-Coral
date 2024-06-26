import { useEffect, useState } from "react";
import { Container, ButtonGroup, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import {
  getOurProducts,
  setOurProducts,
} from "../../redux/feature/productSlice";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  padding: 0,
  "&:hover": {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300],
  },
}));

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
      borderColor: blueGrey[200],
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300],
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500],
    },
    "& input": {
      textAlign: "center",
      width: 40,
      color: blueGrey[700],
    },
  },
});

export default function QuantityCounter({ row }) {
  const dispatch = useDispatch();
  const allProducts = useSelector(getOurProducts);
  const [count, setCount] = useState(row.quantity);
  useEffect(() => {
    const requiredId = allProducts.map((data) =>
      data.id === row.id ? { ...data, quantity: count } : data
    );
    dispatch(setOurProducts(requiredId));
    // eslint-disable-next-line
  }, [count]);
  return (
    <Container>
      <ButtonGroup>
        <StyledButton
          onClick={() => setCount(count - 1)}
          disabled={count.quantity <= 1}
        >
          <RemoveIcon fontSize="small" />
        </StyledButton>
        <StyledInput
          size="small"
          // type="number"
          disabled={true}
          // onChange={(e) => setCount(e.target.value)}
          value={count}
          inputProps={{ min: 1, max: 999 }}
        />
        <StyledButton
          disabled={count.quantity >= 999}
          onClick={() => setCount(count + 1)}
        >
          <AddIcon fontSize="small" />
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}
