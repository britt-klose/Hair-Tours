import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
//make mobile responsive

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#c44766",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: 50,
  paddingBottom: 20,
}));

export default function groupAvatars() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        sx={{ justifyContent: "center" }}
      >
        <Grid item xs={5}>
          <Item>
            <Card sx={{ maxWidth: 1000 }}>
              <CardMedia
                component="img"
                height="300"
                width="200"
                image="/Brittany.png"
                alt="Brittany"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brittany
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Card sx={{ maxWidth: 1000 }}>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="/Elizabeth.png"
                alt="Elizabeth"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Elizabeth
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Card sx={{ maxWidth: 1000 }}>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="/Sam.png"
                alt="Sam"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sam
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Card sx={{ maxWidth: 1000 }}>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="/realSteve.png"
                alt="realSteve"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Steve
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
