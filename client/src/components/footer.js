import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Hair Tours
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {/* {title} */} Hair Tours
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          A purple griffin development
          {/* {description} */}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
