import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Login-SignUp.css";
import { useAuth } from "../../Context/LoginAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isLoggedIn, login, logout } = useAuth();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("https://top-games-backend.onrender.com/sign-up", {
        email,
        password, // Send plain password
      });

      if (response.data.success) {
        alert("Login successful!");
        // Redirect to the dashboard or homepage after login
        login();
        window.location.href = "/";
      } else {
        alert("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <h1>Create an Account</h1>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            color: "white",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              color: "white",
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#f35b04",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: email ? "#f35b04" : "gray",
                },
                "&:hover fieldset": {
                  borderColor: email ? "#f35b04" : "#f35b04",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#f35b04",
                },
                "& input": {
                  color: "white",
                },
              },
            }}
          />
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#f35b04",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: password ? "#f35b04" : "gray",
                },
                "&:hover fieldset": {
                  borderColor: password ? "#f35b04" : "#f35b04",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#f35b04",
                },
                "& input": {
                  color: "white",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{
                      color: "gray",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "&.Mui-focusVisible": {
                        outline: "none",
                      },
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#f35b04",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: password ? "#f35b04" : "gray",
                },
                "&:hover fieldset": {
                  borderColor: password ? "#f35b04" : "#f35b04",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#f35b04",
                },
                "& input": {
                  color: "white",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{
                      color: "gray",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "&.Mui-focusVisible": {
                        outline: "none",
                      },
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#f35b04",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#d04e04",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;
