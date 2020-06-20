import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { FieldProps } from "formik";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface IStudentParams extends FieldProps {
  label: string;
  placeholder: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 100,
      textAlign: "left",
    },
    textField: {
      minWidth: 250,
    },
  })
);

export function AddStudentField({
  label,
  placeholder,
  field,
}: IStudentParams): JSX.Element {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      label={label}
      placeholder={placeholder}
      // eslint-disable-next-line
      {...field}
      className={classes.textField}
    />
  );
}

export function AddStudentNumField({
  label,
  placeholder,
  field,
}: IStudentParams): JSX.Element {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      label={label}
      placeholder={placeholder}
      // eslint-disable-next-line
      {...field}
      className={classes.textField}
      type="number"
      id="outlined-number"
    />
  );
}

export function AddStudentSelectField({
  label,
  field,
}: IStudentParams): JSX.Element {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        label={label}
        // eslint-disable-next-line
        {...field}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="JK">JK</MenuItem>
        <MenuItem value="SK">SK</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="5">5</MenuItem>
        <MenuItem value="6">6</MenuItem>
        <MenuItem value="7">7</MenuItem>
        <MenuItem value="8">8</MenuItem>
        <MenuItem value="9">9</MenuItem>
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="11">11</MenuItem>
        <MenuItem value="12">12</MenuItem>
      </Select>
    </FormControl>
  );
}
