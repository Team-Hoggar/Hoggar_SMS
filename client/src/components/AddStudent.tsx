import * as React from "react";
import { Button, Typography, Tooltip } from "@material-ui/core";
import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import {
  AddStudentField,
  AddStudentSelectField,
  AddStudentNumField,
} from "./AddStudentField";

export interface Values {
  firstName: string;
  lastName: string;
  age?: number;
  grade: string;
  email: string;
}

export interface IAddStudentProps {
  onSubmit: (values: Values) => void;
}

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Please enter an e-mail address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateFirstName(value: string) {
  let error;
  if (!value) {
    error = "Please enter a first name";
  }
  return error;
}

function validateLastName(value: string) {
  let error;
  if (!value) {
    error = "Please enter a last name";
  }
  return error;
}

function validateGrade(value: string) {
  let error;
  if (!value) {
    error = "Please enter a grade";
  }
  return error;
}

function validateAge(value: string) {
  let error;
  if (!value || Number(value) < 1 || Number(value) > 25) {
    error = "Please enter a valid age";
  }
  return error;
}

const RedTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.error.main,
    color: "white",
    boxShadow: theme.shadows[3],
    fontSize: 15,
  },
}))(Tooltip);

export function AddStudent({ onSubmit }: IAddStudentProps): JSX.Element {
  const initialFormValues: Values = {
    firstName: "",
    lastName: "",
    age: undefined,
    grade: "",
    email: "",
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "auto",
        position: "relative",
        top: "100px",
        width: "350px",
        height: "530px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "relative",
          textAlign: "left",
          top: "15px",
          left: "0px",
          padding: "20px 10px 5px 20px",
          backgroundColor: "rgb(228, 227, 227)",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add a Student
        </Typography>
      </div>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <div
            style={{
              position: "relative",
              textAlign: "center",
              padding: "30px 10px 10px 10px",
            }}
          >
            <Form>
              <RedTooltip
                open={!!errors.firstName && touched.firstName}
                title={errors.firstName ? errors.firstName : ""}
                placement="right"
              >
                <div className="StudentInput">
                  <Field
                    name="firstName"
                    placeholder="Ex: John"
                    component={AddStudentField}
                    label="First Name"
                    validate={validateFirstName}
                  />
                </div>
              </RedTooltip>
              <RedTooltip
                open={!!errors.lastName && touched.lastName}
                title={errors.lastName ? errors.lastName : ""}
                placement="right"
              >
                <div className="StudentInput">
                  <Field
                    name="lastName"
                    placeholder="Ex: Doe"
                    component={AddStudentField}
                    label="Last Name"
                    validate={validateLastName}
                  />
                </div>
              </RedTooltip>
              <RedTooltip
                open={!!errors.age && touched.age}
                title={errors.age ? errors.age : ""}
                placement="right"
              >
                <div className="StudentInput">
                  <Field
                    name="age"
                    placeholder="Ex: 3, 4, 5..."
                    component={AddStudentNumField}
                    label="Age"
                    validate={validateAge}
                  />
                </div>
              </RedTooltip>
              <RedTooltip
                open={!!errors.grade && touched.grade}
                title={errors.grade ? errors.grade : ""}
                placement="right"
              >
                <div className="StudentInput">
                  <Field
                    name="grade"
                    placeholder="Ex: JK, SK, 1..."
                    component={AddStudentSelectField}
                    label="Grade"
                    validate={validateGrade}
                  />
                </div>
              </RedTooltip>
              <RedTooltip
                open={!!errors.email && touched.email}
                title={errors.email ? errors.email : ""}
                placement="right"
              >
                <div className="StudentInput">
                  <Field
                    name="email"
                    placeholder="Ex: name@address.com"
                    component={AddStudentField}
                    validate={validateEmail}
                    label="E-mail"
                  />
                </div>
              </RedTooltip>
              <div
                style={{
                  position: "relative",
                  textAlign: "right",
                  top: "20px",
                  left: "-15px",
                }}
              >
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
