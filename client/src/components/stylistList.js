import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const StylistList = ({ users }) => {
  return (
    <div>
      {users.length &&
        users.map((user) => (
          <div key={user._id}>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem id="stylistList">
                <ListItemAvatar>
                  <Avatar
                    alt="Profile Pic"
                    src={user.profilePhoto}
                    sx={{ marginLeft: "3px", width: 56, height: 56 }}
                  />
                </ListItemAvatar>

                <ListItemText
                  sx={{ display: "inline", margin: "15px" }}
                  primary={user.username}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline", margin: "15px" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        fontSize={"15pt"}
                      ></Typography>
                    </React.Fragment>
                  }
                />
                <Link to={`/stylists/${user._id}`}>
                  <Button
                    variant="contained"
                    size="medium"
                    type="button"
                    color="secondary"
                  >
                    VIEW PROFILE
                  </Button>
                </Link>
              </ListItem>
            </List>
          </div>
        ))}
    </div>
  );
};

export default StylistList;
