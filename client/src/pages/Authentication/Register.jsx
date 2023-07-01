import React from "react";
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

/*
  NOTE : I know how to validate using regular expressions, for example for an email:
  declare a regular expression, re = //^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i/ and then use result of re.test())to validate 
  
  but doing that way just beats the purpose of using React. One of the key features of react is code reusability 
  so you don't repeat yourself and write lesser lines of code. Hence to keep it short and simple I used yup and formik
  yup offers an inbuilt email validation system which automatically detects if an email format is incorrect

*/

/*registerSchema is the schema which is fed to formik so that it knows the format of data being entered in the form
it establishes the rules which must be followed by each field in the form*/

const registerSchema = yup.object({
  /*firstName should be a string of minimum 2 characters and maximum 30 characters. 
The required field indicates it is a mandatory field and the text in it is the text to be displayed if the user enters incorrect data*/
  firstName: yup
    .string()
    .min(2)
    .max(30)
    .required("Should be atleast 2 characters long"),
  /*lastName should be a string of minimum 2 characters and maximum 30 characters. 
The required field indicates it is a mandatory field and the text in it is the text to be displayed if the user enters incorrect data*/
  lastName: yup
    .string()
    .min(2)
    .max(30)
    .required("Should be atleast 2 characters long"),
  /* email must be in the format string@string and is a required field */
  email: yup.string().email().required("Enter a valid email"),
  /* password must be atleast 6 characters long and is a mandatory field */
  password: yup
    .string()
    .min(6)
    .required("Password must be atleast 6 characters long"),
  /* confirmPassword must be exactly identical to the value of password  and is a mandatory field */
  confirmPassword: yup
    .string()
    .min(6)
    .required("Passwords must match")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

//initialRegisterValues is used to initialize the form input values and also used to reset the form
const initialRegisterValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

//toggleSuccesModal is accepted as props from App.jsx to make the success modal work properly
const RegisterForm = ({ toggleSuccesModal }) => {
  /*This is a CSS media query hook for React offered by MaterialUI. It listens for matches to a CSS media query. 
  It allows the rendering of components based on whether the query matches or not.*/

  const isNonMobile = useMediaQuery("(min-width:800px)");

  /*values are the values entered in the form inputs, 
  errors tracks if any form data entered doesn't comply with the yup schema defined earlier and fed to Formik
  touched tracks if a user has interacted with an input field or not  
  handleBlur is a function that performs an operation when the user clicks away from an input field
  handleChange is a function that changes values by observing what user enters in the input field
  handleSubmit is a function that executes when form is submitted
  */
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialRegisterValues,
      validationSchema: registerSchema,
      onSubmit: async (values, action) => {
        //show successmodal when the form is submitted
        toggleSuccesModal();

        //creating a variable that will store the data from the form to send to the backend
        const feedbackToSend = {
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          password: values.password,
        };
        //view the data being sent to the backend in the console
        console.log(feedbackToSend);
        /*the fetch method is used for the process of fetching a resource from a server.
        It returns a Promise hence it is asynchronous in nature. Here I am defining the method of request ie POST to post form data,
        the body which is basically the form data in a format that can be saved on the backend database and headers which helps an app 
        detect what kind of data is being received, here I defined it as application/json since I am expecting JSON data
        */
        await fetch("https://techvinform-backend.onrender.com/formdata", {
          method: "POST",
          body: JSON.stringify(feedbackToSend),
          headers: {
            "Content-Type": "application/json",
          },
        });
        //After all above operations are completed action.resetForm() resets all the form input fields so the entered data is erased
        action.resetForm();
      },
    });

  return (
    <React.Fragment>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: "1rem" }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </React.Fragment>
  );
};

export default RegisterForm;
