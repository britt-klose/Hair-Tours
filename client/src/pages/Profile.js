import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UPDATE_USER } from "../utils/mutations";
import ServicesChecklist from "../components/servicesChecklist";
import Button from "@mui/material/Button";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState("");
  const [updateUser] = useMutation(UPDATE_USER);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  let { userId } = useParams();

  const { data } = useQuery(QUERY_ME, {
    variables: { userId: userId },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await updateUser({
        variables: { userId, username },
      });

      console.log(data);

      setUsername("");
    } catch (err) {
      console.error(err);
    }
  };

  const theme = createTheme();

  const me = data?.user || [];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

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

                  <input
                    accept="image/*"
                    type="file"
                    id="select-image"
                    style={{ display: "none" }}
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                  />
                  <label htmlFor="select-image">
                    <Button variant="contained" color="primary">
                      Upload Image
                    </Button>
                  </label>
                  {imageUrl && selectedImage && (
                    <Box mt={2} textAlign="center">
                      <div>Image Preview:</div>
                      <img
                        src={imageUrl}
                        alt={selectedImage.name}
                        height="100px"
                      />
                    </Box>
                  )}
                  <div className="flex-row w-100">
                    <h2>Username:</h2>
                    <input
                      placeholder={username}
                      value={username}
                      className="form-input w-100"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                    <h2>Email:</h2>
                    <input
                      placeholder={email}
                      value={email}
                      className="form-input w-100"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <h2>Services:</h2>
                    <ServicesChecklist
                      placeholder={services}
                      value={services}
                      className="form-input w-100"
                      onChange={(event) => setServices(event.target.value)}
                    />

                    <div>
                      <button
                        className="btn btn-info btn-block py-3"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </Typography>
              <Typography variant="subtitle1">{me.email}</Typography>
            </React.Fragment>
            <React.Fragment>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
