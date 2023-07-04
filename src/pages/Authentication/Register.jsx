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
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const registerSchema = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(30)
    .required("Should be atleast 2 characters long"),
  lastName: yup
    .string()
    .min(2)
    .max(30)
    .required("Should be atleast 2 characters long"),
  /* email must be in the format string@string and is a required field */
  email: yup.string().email().required("Enter a valid email"),
  password: yup
    .string()
    .min(6)
    .required("Password must be atleast 6 characters long"),
  confirmPassword: yup
    .string()
    .min(6)
    .required("Passwords must match")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const initialRegisterValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = ({ toggleSuccesModal }) => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const isNonMobile = useMediaQuery("(min-width:800px)");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialRegisterValues,
      validationSchema: registerSchema,
      onSubmit: async (values, action) => {
        const userCredentials = {
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          password: values.password,
        };
        setLoading(true);
        try {
          const { data } = await axios.post(
            `${server}/users/new`,
            userCredentials,
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
              <Typography variant="h4">Register</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.firstName && touched.firstName
                      ? `${errors.firstName}`
                      : ""
                  }
                  error={errors.firstName && touched.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last name"
                  name="lastName"
                  autoComplete="lname"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.lastName && touched.lastName
                      ? `${errors.lastName}`
                      : ""
                  }
                  error={errors.lastName && touched.lastName}
                />
              </Grid>
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.confirmPassword && touched.confirmPassword
                      ? `${errors.confirmPassword}`
                      : ""
                  }
                  error={errors.confirmPassword && touched.confirmPassword}
                />
              </Grid>
            </Grid>
            <Box sx={{ marginTop: "1rem" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                    m: "2rem 0",
                  }}
                >
                  Already have an account? Click here to&nbsp;
                  <span style={{ color: "#7A26C0" }}>Login</span>
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
              Register
            </Button>
          </form>
        </Paper>
      )}
    </React.Fragment>
  );
};

export default RegisterForm;
