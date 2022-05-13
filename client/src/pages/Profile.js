import { useQuery, useMutation } from "@apollo/client";
// import { useParams } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UPDATE_USER } from "../utils/mutations";
import ServicesChecklist from "../components/servicesChecklist";
import Button from "@mui/material/Button";
import Auth from "../utils/auth";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState([]);
  const [calId, setCalId] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [imageURL, setImageURL] = useState([]);
  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (profilePhoto.length < 1) return;
    const newImageURL = [];
    profilePhoto.forEach((profilePhoto) =>
      newImageURL.push(URL.createObjectURL(profilePhoto))
    );
    setImageURL(newImageURL);
  }, [profilePhoto]);

  // let { userId } = useParams();

  const { data } = useQuery(QUERY_ME);
  const me = data?.me || [];

  const userData = {
    username: username,
    email: email,
    calId: calId,
    profilePhoto: profilePhoto,
    services: services,
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: { userData: userData },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.replace("/");
  };

  function onImageChange(e) {
    setProfilePhoto([...e.target.files]);
    console.log(imageURL);
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {Auth.loggedIn() ? (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Profile
            </Typography>

            <React.Fragment>
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  <form
                    className="flex-column justify-center justify-space-between-md align-center"
                    onSubmit={handleFormSubmit}
                  >
                    <Avatar
                      alt="Your Profile Picture"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 56, height: 56 }}
                    />

                    <div className="align-center my-5 file">
                      {/* <Button variant="contained" color="primary">
                      Upload Image
                    </Button>{" "} */}
                      <input
                        placeholder={profilePhoto}
                        accept="image/*"
                        type="file"
                        id="select-image"
                        // style={{ display: "none" }}
                        onChange={onImageChange}
                      />
                    </div>

                    <div className="flex-row w-100">
                      <h2>Username:</h2>
                      <input
                        placeholder={me.username}
                        value={username}
                        className="form-input w-100"
                        onChange={(event) => setUsername(event.target.value)}
                      />
                      <h2>Email:</h2>
                      <input
                        placeholder={me.email}
                        value={email}
                        className="form-input w-100"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <h2>Calendly Link:</h2>
                      <input
                        placeholder={me.calId}
                        value={calId}
                        className="form-input w-100"
                        onChange={(event) => setCalId(event.target.value)}
                      />
                      <h2>Services:</h2>
                      <ServicesChecklist
                        placeholder={me.services}
                        value={services}
                        className="form-input w-100"
                        onChange={(event) => setServices(event.target.value)}
                      />

                      <div className="w-100">
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                          sx={{
                            mx: "25%",
                            my: 2,
                            display: "block",
                            width: "50%",
                          }}
                        >
                          <Typography textAlign="center">Submit</Typography>
                        </Button>
                        <div>
                          <Button
                            onClick={logout}
                            sx={{
                              mx: "25%",
                              my: 2,
                              background: "red",
                              color: "white",
                              display: "block",
                              width: "50%",
                            }}
                          >
                            <Typography textAlign="center">LOGOUT</Typography>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Typography>
              </React.Fragment>
              <React.Fragment>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box>
              </React.Fragment>
            </React.Fragment>
          </Paper>{" "}
        </Container>
      ) : (
        <p>
          You need to be logged in to edit a profile. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </ThemeProvider>
  );
};

export default Profile;
