import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/carousel.component";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div>
      <div
        className="card bg-white card-rounded text-center"
        style={{
          position: "absolute",
          marginLeft: "25%",
          marginTop: "10%",
          display: "flex",
          height: "20%",
          width: "50%",
          boxShadow: "0 0 3px 2px #cec7c759",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          borderRadius: 20,
          zIndex: 1,
        }}
      >
        <div className="text-center m-3">
          <h1 style={{ marginBottom: 30 }}>Welcome to Hair Tours!</h1>
          <h2>Ready to Get Styled?</h2>
          <Link to="/matchup">
            <button className="btn btn-lg btn-danger">
              Find a Service Provider!
            </button>
          </Link>
        </div>
      </div>
      <CarouselComponent />
      <div>
        <div
          style={{
            background: "white",
            padding: "2%",
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: "5%",
          }}
        >
          <h1 className="text-center m-3">Instructions for Using this Site:</h1>
          <div>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>
                    <img
                      src="1.png"
                      alt="Step 1"
                      width={150}
                      height={150}
                    ></img>
                    <h2>Create a Profile</h2>
                    <ul className="text-center">
                      In the upper right corner, Login or Sign Up
                    </ul>
                    <ul>
                      Select Profile to Change your Details, including Profile
                      Picture and Name
                    </ul>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img
                      src="2.png"
                      alt="Step 2"
                      width={150}
                      height={150}
                    ></img>
                    <h2>Select Your Services</h2>
                    <ul>
                      Navigate to the Services Tab and Select the Services you
                      Desire
                    </ul>
                    <ul>
                      Submit the Form to View Providers that offer these
                      Services
                    </ul>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img
                      src="3.png"
                      alt="Step 3"
                      width={150}
                      height={150}
                    ></img>
                    <h2>Select Your Provider</h2>
                    <ul>
                      After Selecting Services, Browse the list of Providers
                    </ul>
                    <ul>Select a Provider to View their Profile and Reviews</ul>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img
                      src="4.png"
                      alt="Step 4"
                      width={150}
                      height={150}
                    ></img>
                    <h2>Schedule Your Appointment</h2>
                    <ul>
                      Schedule an Appointment with the Provider by Selecting
                      'Schedule Now'
                    </ul>
                    <ul>
                      Select a Date and Time that Works for you. An email
                      confirmation will be sent when you submit.
                    </ul>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
