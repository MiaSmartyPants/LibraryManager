import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileCard from "./components/ProfileCard";
import SettingsCard from "./components/SettingsCard";
import BookCard from "./components/BookCard";
import "./App.css";


// FONTS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// STYLE & THEME
const theme = createTheme();

// APP
export default function Profile(userData) {
  const [text, setText] = useState("");
  const mainUser = {
    // DEFAULT VALUES
    title: "CEO of Apple",
    dt1: 32,
    dt2: 40,
    dt3: 50,
    firstName: { text },
    lastName: "Doe",
    midName: "Baker",
    gender: "female",
    phone: "932-555-4247",
    email: "janedoe@gmail.com",
    pass: "password123"
  };

  const fullName = `${mainUser.firstName} ${mainUser.lastName}`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <FancyButton />  */}
      <Grid
        container
        direction="column"
        sx={{ overflowX: "visible" }}
      >
        <Grid item xs={12} md={6}>
          <img
            alt="avatar"
            style={{
              width: "100vw",
              height: "35vh",
              objectFit: "cover",
              objectPosition: "50% 50%",
              position: "relative"
            }}
            src="https://iris2.gettimely.com/images/default-cover-image.jpg"
          />
        </Grid>
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            position: "absolute",
            top: "20vh",
            px: { xs: 800, md: 7 }
          }}
        >
          <Grid item md={3}>
            <ProfileCard
              name={fullName}
              sub={mainUser.title}
              dt1={mainUser.dt1}
              dt2={mainUser.dt2}
              dt3={mainUser.dt3}
            />
          </Grid>
          <Grid item md={9}>
            <SettingsCard
              expose={(v) => setText(v)}
              firstName={mainUser.firstName}
              lastName={mainUser.lastName}
              midName={mainUser.midName}
              phone={mainUser.phone}
              email={mainUser.email}
              pass={mainUser.pass}
              gender={mainUser.gender}
            />
          </Grid>
          <Grid item xs={12}>
            <BookCard userBooks={userData.UserData.userBooks}/>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
