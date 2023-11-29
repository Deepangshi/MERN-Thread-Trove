import Product from "./Product";
import { popularProducts } from "../data";
import { Grid } from "@mui/material";

const Products = () => {
  return (
    <Grid
      container
      sx={{
        padding: "20px",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default Products;
