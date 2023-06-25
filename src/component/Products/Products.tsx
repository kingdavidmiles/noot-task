import FeaturedProducts from "./FeaturedProducts";
import OnSaleProduct from "./OnSaleProduct";
import RatedProduct from "./RatedProduct";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import styles from "../../style/MyComponent.module.css";
const Products = () => {
  return (
    <>
      <Box>
        <Grid container spacing={8} sx={{ mt: 2 }}>
          {/* FeaturedProducts */}
          <Grid item md={4} sx={{ mt: 0, mb: 1 }}>
            <Typography className={styles.productTypo}>Featured Products</Typography>
            <Typography>
              <FeaturedProducts />
            </Typography>
          </Grid>
          {/* OnSaleProduct */}
          <Grid item md={4} sx={{ mt: 0, mb: 1 }}>
            <Typography className={styles.productTypo}>On sale Products</Typography>
            <Typography>
              <OnSaleProduct />
            </Typography>
          </Grid>
          {/* RatedProduct */}
          <Grid item md={4} sx={{ mt: 0, mb: 1 }}>
            <Typography className={styles.productTypo}>Top Rated Products</Typography>
            <Typography>
              <RatedProduct />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Products;
