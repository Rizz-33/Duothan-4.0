"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: "black",
        color: "white",
        mt: 4,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <IconButton
            aria-label="facebook"
            color="inherit"
            sx={{ mx: 1, "&:hover": { color: "#3b5998" } }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="twitter"
            color="inherit"
            sx={{ mx: 1, "&:hover": { color: "#00acee" } }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            aria-label="instagram"
            color="inherit"
            sx={{ mx: 1, "&:hover": { color: "#E4405F" } }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            color="inherit"
            sx={{ mx: 1, "&:hover": { color: "#0e76a8" } }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Typography
          variant="body2"
          component="p"
          sx={{ textAlign: "center", mb: 1 }}
        >
          © 2024 Quadzilla. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
