import HomeLayout from "./layout/homeLayout";
import Count from "./component/Count";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import OurService from "./component/OurService";
import OurSpecials from "./component/OurSpecials";
import Products from "./component/Products/Products";
import Subscribe from "./component/Subscrips";
import LatestBlog from "./component/Blog/LatestBlog";
import ContactUs from "./component/ContactUs";
import OtherPosts from "./component/Blog/OtherPosts";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <HomeLayout />

      <Container maxWidth={"lg"}>
        <Count />

        <Box sx={{ mt: 8, mb: 4 }}>
          <OurService />
        </Box>
        <Box>
          <OurSpecials />
        </Box>

        <Box>
          <Products />
        </Box>
        <Box sx={{ mb: 8 }}>
          <Subscribe />
        </Box>
        <Box>
          <LatestBlog />
        </Box>
      </Container>
      <Box>
        <ContactUs />
      </Box>

      <Container>
        <Box>
          <OtherPosts />
        </Box>
      </Container>

      <Footer/>
    </>
  );
}

export default App;
