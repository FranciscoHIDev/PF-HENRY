import { Formik, Field, Form, useFormik } from "formik";
import { useDispatch } from "react-redux";
import React from "react";
import { Widget } from "@uploadcare/react-widget";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; 
import "./Form.css";
import {
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { postCar } from "../../../redux/actions/actions";

export const FormCar = () => {
  const dispatch = useDispatch();
  const onFileSelect = (file) => {
    console.log("File changed: ", file);
    if (file) {
      file.done((info) => console.log("File uploaded: ", info));
    }
  };
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    handleChange,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      type: "New",
      brand: "",
      image: "",
      status: "valid",
      active: "valid",
      price: 0,
      description: "",
      fuelConsumption: "",
      location: "",
      color: "",
      mileage: "",
      year: 0,
      doors: 0,
      model: "",
      category: "",
      fuelType: "gasoline",
      transissionType: "handbook",
    },
    validationSchema: Yup.object({
      type: Yup.string(),
      brand: Yup.string()
        .min(3, "Min. 3 characters")
        .max(15, "Max. 15 characters")
        .required("Brand is required"),
      image: Yup.string().required("Image is required"),
      status: Yup.string(),
      active: Yup.string(),
      price: Yup.number()
        .positive("Price must be greater than zero")
        .required("Price is required"),
      description: Yup.string()
        .min(30, "Min. 30 characters")
        .max(500, "Max. 500 characters")
        .required("Description is required"),
      fuelConsumption: Yup.string()
        .min(3, "Min. 3 characters")
        .max(15, "Max. 15 characters")
        .required("Fuel consumption is required"),
      location: Yup.string()
        .min(10, "Min. 10 characters")
        .max(200, "Max. 200 characters")
        .required("Location is required"),
      color: Yup.string()
        .min(3, "Min. 3 characters")
        .max(18, "Max. 18 characters")
        .required("Color is required"),
      mileage: Yup.string()
        .min(0, "Min. 1 characters")
        .max(18, "Max. 18 characters")
        .required("Mileage is required"),
      year: Yup.number()
        .positive("Year must be greater than zero")
        .required("Year is required"),
      doors: Yup.number()
        .positive("Doors must be greater than zero")
        .required("Doors is required"),
      model: Yup.string()
        .min(2, "Min. 3 characters")
        .max(50, "Max. 15 characters")
        .required("Model is required"),
      category: Yup.string()
        .min(3, "Min. 3 characters")
        .max(15, "Max. 15 characters")
        .required("Category is required"),
      fuelType: Yup.string(),
      transissionType: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(postCar(values));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New car has been created successfully",
        showConfirmButton: true,
      });
      resetForm({ values: "" });
    },
  });
  return (
    <>
      <Link to="/dashboard/cars">
        <button
          type="button"
          className="absolute top-20 mr-10 right-4 flex px-6 py-2.5 bg-primary text-white font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-[#0d6efd] hover:shadow-lg "
        >
          Back
        </button>
      </Link>
      <div>
        <div className="form_car">
          <form onSubmit={handleSubmit}>
            <label className="form_title">FORM TO CREATE A NEW CAR</label>
            <TextField
              fullWidth
              select
              label="Type"
              value={values.type}
              name="fuelType"
              margin="normal"
              onChange={handleChange}
              error={touched.type && errors.type ? true : false}
              helperText={
                touched.type && errors.type ? (
                  <span>{errors.type} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("type")}
            >
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="Used">Used</MenuItem>
            </TextField>

            <TextField
              fullWidth
              name="brand"
              value={values.brand}
              type="text"
              label="Brand"
              margin="normal"
              onChange={handleChange}
              error={errors.brand && touched.brand ? true : false}
              helperText={
                errors.brand && touched.brand ? (
                  <span>{errors.brand} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("brand")}
            />
            <fieldset>
              <legend>Image</legend>
              <Widget
                // className="uploader"
                publicKey={"c3375de6887b25d41817"}
                name="image"
                value={values.image}
                previewStep
                clearable
                crop
                margin="normal"
                onChange={(e) => setFieldValue("image", e.originalUrl)}
                onFileSelect={onFileSelect}
                // {...getFieldProps("image")}
              />
              {touched.image && errors.image && (
                <span className="error">{errors.image}</span>
              )}
            </fieldset>
            <fieldset>
              <legend>Status</legend>
              <RadioGroup
                row
                name="status"
                value={values.status}
                style={{ marginLeft: "190px" }}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"valid"}
                  control={<Radio size="small" />}
                  label="Valid"
                />
                <FormControlLabel
                  value={"invalid"}
                  control={<Radio size="small" />}
                  label="Invalid"
                />
              </RadioGroup>
            </fieldset>
            <fieldset>
              <legend>Active </legend>
              <RadioGroup
                row
                name="active"
                value={values.active}
                style={{ marginLeft: "190px" }}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"valid"}
                  control={<Radio size="small" />}
                  label="Valid"
                />
                <FormControlLabel
                  value={"invalid"}
                  control={<Radio size="small" />}
                  label="Invalid"
                />
              </RadioGroup>
            </fieldset>
            <TextField
              fullWidth
              name="price"
              value={values.price}
              margin="normal"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              label="Price"
              onChange={handleChange}
              error={errors.price && touched.price ? true : false}
              helperText={
                errors.price && touched.price ? (
                  <span>{errors.price} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("price")}
            />
            <TextField
              fullWidth
              name="description"
              type="text"
              label="Description"
              multiline
              maxRows={10}
              onChange={handleChange}
              error={errors.description && touched.description ? true : false}
              helperText={
                errors.description && touched.description ? (
                  <span>{errors.description} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("description")}
            />
            <TextField
              fullWidth
              name="fuelConsumption"
              value={values.fuelConsumption}
              type="text"
              label="Fuel Comsuption"
              margin="normal"
              onChange={handleChange}
              error={
                touched.fuelConsumption && errors.fuelConsumption ? true : false
              }
              helperText={
                touched.fuelConsumption && errors.fuelConsumption ? (
                  <span>{errors.fuelConsumption} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("fuelConsumption")}
            />
            <TextField
              fullWidth
              name="location"
              value={values.location}
              margin={"normal"}
              type="text"
              label="Location"
              onChange={handleChange}
              error={touched.location && errors.location ? true : false}
              helperText={
                touched.location && errors.location ? (
                  <span>{errors.location} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("location")}
            />
            <TextField
              fullWidth
              name="color"
              value={values.color}
              margin="normal"
              type="text"
              label="Color"
              onChange={handleChange}
              error={touched.color && errors.color ? true : false}
              helperText={
                touched.color && errors.color ? (
                  <span>{errors.color} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("color")}
            />
            <TextField
              fullWidth
              name="year"
              type="number"
              min="4"
              max="4"
              label="Year"
              margin="normal"
              onChange={handleChange}
              error={touched.year && errors.year ? true : false}
              helperText={
                touched.year && errors.year ? (
                  <span>{errors.year} </span>
                ) : (
                  false
                )
              }
            />
            <TextField
              fullWidth
              name="doors"
              type="number"
              min="0"
              max="5"
              label="Doors"
              margin="normal"
              onChange={handleChange}
              error={touched.doors && errors.doors ? true : false}
              helperText={
                touched.doors && errors.doors ? (
                  <span>{errors.doors} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("doors")}
            />
            <TextField
              fullWidth
              name="model"
              type="text"
              label="Model"
              margin="normal"
              onChange={handleChange}
              error={touched.model && errors.model ? true : false}
              helperText={
                touched.model && errors.model ? (
                  <span>{errors.model} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("model")}
            />
            <TextField
              fullWidth
              name="mileage"
              value={values.name}
              mileage="text"
              label="Mileage"
              margin="normal"
              onChange={handleChange}
              error={errors.mileage && touched.mileage ? true : false}
              helperText={
                errors.mileage && touched.mileage ? (
                  <span>{errors.mileage} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("mileage")}
            />
            <TextField
              fullWidth
              name="category"
              type="text"
              label="Category"
              margin="normal"
              onChange={handleChange}
              error={touched.category && errors.category ? true : false}
              helperText={
                touched.category && errors.category ? (
                  <span>{errors.category} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("category")}
            />
            <TextField
              fullWidth
              select
              label="Type Of Fuel"
              value={values.fuelType}
              name="fuelType"
              margin="normal"
              onChange={handleChange}
              error={touched.fuelType && errors.fuelType ? true : false}
              helperText={
                touched.fuelType && errors.fuelType ? (
                  <span>{errors.fuelType} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("fuelType")}
            >
              <MenuItem value="gasoline">Gasoline</MenuItem>
              <MenuItem value="gas">Gas</MenuItem>
              <MenuItem value="hibrid">Hibrid</MenuItem>
            </TextField>
            <TextField
              fullWidth
              select
              label="TransissionType"
              value={values.transissionType}
              name="transissionType"
              margin="normal"
              onChange={handleChange}
              error={
                touched.transissionType && errors.transissionType ? true : false
              }
              helperText={
                touched.transissionType && errors.transissionType ? (
                  <span>{errors.transissionType} </span>
                ) : (
                  false
                )
              }
              {...getFieldProps("transissionType")}
            >
              <MenuItem value="automatic">Automatic</MenuItem>
              <MenuItem value="handbook">HandBook</MenuItem>
              <MenuItem value="semiautomatic">Semiautomatic</MenuItem>
            </TextField>
            <Button
              sx={{ backgroundColor: "#fb8500" }}
              variant="contained"
              fullWidth
              type="submit"
            >
              CREATE CAR
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
