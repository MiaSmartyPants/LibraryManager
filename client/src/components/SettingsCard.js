import React, { useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomInput from "./CustomInput";

export default function SettingsCard(props) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const genderSelect = [
    {
      value: "male",
      label: "Male"
    },
    {
      value: "female",
      label: "Female"
    }
  ];

  const [user, setUser] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
    midName: props.midName,
    gender: props.gender,
    phone: props.phone,
    email: props.email,
    pass: props.pass,
    showPassword: false
  });

  const changeField = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const [edit, update] = useState({
    required: true,
    disabled: true,
    isEdit: true
  });

  const changeButton = (event) => {
    event.preventDefault();
    user.showPassword = false;
    edit.disabled = !edit.disabled;
    edit.isEdit = !edit.isEdit;
    update({ ...edit });
    console.log("user: ", user);
  };

  const handlePassword = () => {
    user.showPassword = !user.showPassword;
    setUser({ ...user });
  };

  return React.createElement(
    Card,
    { variant: "outlined", sx: { height: "100%", width: "100%" } },
    React.createElement(Tabs, {
      value: value,
      onChange: handleChange,
      textColor: "secondary",
      indicatorColor: "secondary"
    },
    React.createElement(Tab, { value: "one", label: "Account" }),
    React.createElement(Tab, { value: "two", label: "Tab 2" }),
    React.createElement(Tab, { value: "three", label: "Tab 3" })
  ),
  React.createElement(Divider, null),
  React.createElement("form", null,
    React.createElement(CardContent, {
      sx: {
        p: 3,
        maxHeight: { md: "40vh" },
        textAlign: { xs: "center", md: "start" }
      }
    },
    React.createElement(FormControl, { fullWidth: true },
      React.createElement(Grid, {
        container: true,
        direction: { xs: "column", md: "row" },
        columnSpacing: 5,
        rowSpacing: 3
      },
      React.createElement(Grid, { component: "form", item: true, xs: 6 },
        React.createElement(CustomInput, {
          id: "firstName",
          name: "firstName",
          value: user.firstName,
          onChange: changeField,
          title: "First Name",
          dis: edit.disabled,
          req: edit.required
        })
      ),
      React.createElement(Grid, { component: "form", item: true, xs: 6 },
        React.createElement(CustomInput, {
          id: "lastName",
          name: "lastName",
          value: user.lastName,
          onChange: changeField,
          title: "Last Name",
          dis: edit.disabled,
          req: edit.required
        })
      ),
      React.createElement(Grid, { item: true, xs: 6 },
        React.createElement(CustomInput, {
          id: "midName",
          name: "midName",
          value: user.midName,
          onChange: changeField,
          title: "Middle Name",
          dis: edit.disabled,
          req: edit.required
        })
      ),
      React.createElement(Grid, { item: true, xs: 6 },
        React.createElement(CustomInput, {
          select: true,
          id: "gender",
          name: "gender",
          value: user.gender,
          onChange: changeField,
          title: "Gender",
          dis: edit.disabled,
          req: edit.required,
          content: genderSelect.map((option) =>
            React.createElement(MenuItem, { value: option.value, children: option.label })
          )
        })
      ),
      React.createElement(Grid, { item: true, xs: 6 },
        React.createElement(CustomInput, {
          id: "phone",
          name: "phone",
          value: user.phone,
          onChange: changeField,
          title: "Phone Number",
          dis: edit.disabled,
          req: edit.required,
          InputProps: {
            startAdornment: React.createElement(
              InputAdornment, { position: "start", children: "63+" }
            )
          }
        })
      ),
      React.createElement(Grid, { item: true, xs: 6 },
        React.createElement(CustomInput, {
          type: "email",
          id: "email",
          name: "email",
          value: user.email,
          onChange: changeField,
          title: "Email Address",
          dis: edit.disabled,
          req: edit.required
        })
      ),
      React.createElement(Grid, { item: true, xs: 6 },
        React.createElement(CustomInput, {
          id: "pass",
          name: "pass",
          value: user.pass,
          onChange: changeField,
          title: "Password",
          dis: edit.disabled,
          req: edit.required,
          type: user.showPassword ? "text" : "password",
          InputProps: {
            endAdornment: React.createElement(
              InputAdornment, { position: "end" },
              React.createElement(IconButton, {
                onClick: handlePassword,
                edge: "end",
                disabled: edit.disabled,
                children: user.showPassword ? React.createElement(VisibilityOff) : React.createElement(Visibility)
              })
            )
          }
        })
      ),
      React.createElement(Grid, {
        container: true,
        justifyContent: { xs: "center", md: "flex-end" },
        item: true,
        xs: 6
      },
      React.createElement(Button, {
        sx: { p: "1rem 2rem", my: 2, height: "3rem" },
        component: "button",
        size: "large",
        variant: "contained",
        color: "secondary",
        onClick: () => props.expose("hello"),
        children: edit.isEdit === false ? "UPDATE" : "EDIT"
      })
    )
  )
)
)))
}
