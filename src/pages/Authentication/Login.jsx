import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Paper,
  TextField,
  Grid,
  Avatar,
  useMediaQuery,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Context, server } from "../..";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const loginSchema = yup.object({
  email: yup.string().email().required("Enter a valid email"),
  password: yup
    .string()
    .min(6)
    .required("Password must be atleast 6 characters long"),
});

const initialLoginValues = {
  email: "",
  password: "",
};

const Login = ({ toggleSuccesModal }) => {
  const isNonMobile = useMediaQuery("(min-width:800px)");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialLoginValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          const { data } = await axios.post(
            `${server}/users/login`,
            { email: values.email, password: values.password },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          toast.success(data.message);
          setIsAuthenticated(true);
          setLoading(false);
        } catch (error) {
          toast.error(error.response.data.message);
          setIsAuthenticated(false);
          setLoading(false);
        }
        action.resetForm();
      },
    });

  if (isAuthenticated) return <Navigate to="/home" />;
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Paper
          elevation={3}
          sx={{
            m: "2rem auto",
            p: "2rem",
            d: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: isNonMobile ? "35%" : "80%",
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mb: "2rem",
              }}
            >
              <Avatar sx={{ bgcolor: "#b642f5" }} size="large" />
              <Typography variant="h4">Login</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.email && touched.email ? `${errors.email}` : ""
                  }
                  error={errors.email && touched.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                  helperText={
                    errors.password && touched.password
                      ? `${errors.password}`
                      : ""
                  }
                  error={errors.password && touched.password}
                />
              </Grid>
            </Grid>
            <Box sx={{ marginTop: "1rem" }}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                    m: "2rem 0",
                  }}
                >
                  Don't have an account? Click here to&nbsp;
                  <span style={{ color: "#7A26C0" }}>Register</span>
                </Typography>
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: "1rem" }}
            >
              Login
            </Button>
          </form>
        </Paper>
      )}
    </React.Fragment>
  );
};

export default Login;
