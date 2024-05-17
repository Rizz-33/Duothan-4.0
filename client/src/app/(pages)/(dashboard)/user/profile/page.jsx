"use client";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { useState } from "react";

export default function Signin() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/authsignup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });
      if (response.ok) {
        console.log("Response: logged");
        const form = e.target;
        form.reset();
      } else {
        const result = await response.json();
        setError(result.message || "Sign up failed for an unknown reason");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Sign up failed: Network error");
    }
  };

  return (
    <Box sx={styles.outerContainer}>
      <Box sx={styles.leftContainer}>
        <Typography variant="h2" sx={{ pb: 4 }}>
          User Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            pb: "16px",
          }}
        >
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="User"
            style={{
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              objectFit: "cover",
            }}
          />
          <Typography variant="h4">John Doe</Typography>
        </Box>
        <Typography variant="body1" sx={{ pb: 2 }}>
          Email : john.doe@example.com
        </Typography>
        <Typography variant="body1" sx={{ pb: 2 }}>
          Contact Number : +1234567890
        </Typography>
        <Typography variant="body1" sx={{ pb: 2 }}>
          DTP Code: #1234
        </Typography>
        <Typography variant="body1" sx={{ pb: 2 }}></Typography>
      </Box>
      <Box sx={styles.formContainer}>
        <Typography variant="h2" sx={{ pb: 4 }}>
          Update User Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl required sx={{ pb: 2 }}>
            <FormLabel>New Email</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl required sx={{ pb: 2 }}>
            <FormLabel>New FirstName</FormLabel>
            <Input
              type="text"
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </FormControl>
          <FormControl required sx={{ pb: 2 }}>
            <FormLabel>New LastName</FormLabel>
            <Input
              type="text"
              name="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </FormControl>
          <FormControl required sx={{ pb: 2 }}>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {error && (
            <Typography color="error" sx={{ pb: 2 }}>
              {error}
            </Typography>
          )}
          <Button type="submit" fullWidth>
            Update
          </Button>
        </form>
      </Box>
    </Box>
  );
}

const styles = {
  outerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
  },
  leftContainer: {
    width: "400px",
    maxWidth: "100%",
    padding: "40px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginRight: "40px",
  },
  formContainer: {
    width: "400px",
    maxWidth: "100%",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};
