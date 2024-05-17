import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleAdminLoginClick = () => {
    navigate("/adminlog");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black", padding: 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white", cursor: "pointer" }}
            onClick={handleHomeClick} // Added onClick event handler
          >
            Logo
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              marginRight: 1,
              "&:hover": { borderColor: "gray" },
            }}
            onClick={handleAdminLoginClick}
          >
            Login as Admin
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              marginRight: 1,
              "&:hover": { borderColor: "gray" },
            }}
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": { borderColor: "gray" },
            }}
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
