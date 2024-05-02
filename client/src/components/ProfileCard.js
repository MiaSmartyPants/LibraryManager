import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499"
  }
};

export default function ProfileCard(props) {
  return React.createElement(
    Card,
    { variant: "outlined" },
    React.createElement(
      Grid,
      {
        container: true,
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      // CARD HEADER START
      React.createElement(
        Grid,
        {
          item: true,
          sx: { p: "1.5rem 0rem", textAlign: "center" }
        },
        // PROFILE PHOTO
        React.createElement(
          Badge,
          {
            overlap: "circular",
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            badgeContent: React.createElement(PhotoCameraIcon, {
              sx: {
                border: "5px solid white",
                backgroundColor: "#ff558f",
                borderRadius: "50%",
                padding: ".2rem",
                width: 35,
                height: 35
              }
            })
          },
          React.createElement(Avatar, {
            src: "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png",
            sx: { width: 100, height: 100, mb: 1.5 }
          })
        ),
        // DESCRIPTION
        React.createElement(Typography, { variant: "h6", children: props.name }),
        React.createElement(Typography, {
          color: "text.secondary",
          children: props.sub
        })
      ),
  
      React.createElement(
        Grid,
        { container: true },
        React.createElement(
          Grid,
          { item: true, xs: 6 },
          React.createElement(Typography, { style: styles.details, children: "Detail 1" }),
          React.createElement(Typography, { style: styles.details, children: "Detail 2" }),
          React.createElement(Typography, { style: styles.details, children: "Detail 3" })
        ),
        // Values
        React.createElement(
          Grid,
          { item: true, xs: 6, sx: { textAlign: "end" } },
          React.createElement(Typography, { style: styles.value, children: props.dt1 }),
          React.createElement(Typography, { style: styles.value, children: props.dt2 }),
          React.createElement(Typography, { style: styles.value, children: props.dt3 })
        )
      ),
      // Button
      React.createElement(
        Grid,
        { item: true, style: styles.details, sx: { width: "100%" } },
        React.createElement(
          Button,
          {
            variant: "contained",
            color: "secondary",
            sx: { width: "99%", p: 1, my: 2 },
            children: "View Public Profile"
          }
        )
      )
      
    )
  );
}
