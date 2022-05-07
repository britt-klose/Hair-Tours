import * as React from "react";
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

      {users &&
        users.map((user) => (
          <div key={user._id}>
            <List sx={{ width: "100%",lenght:"100%" ,bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src='/ramona.png' />
                </ListItemAvatar> 
                
                <ListItemText
                  primary={user.username}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                
                      > Hi there!</Typography>
                      {user.services}
                    </React.Fragment>
                  }
                />
                <Link to={`/stylists/${user._id}`}>
                  <Button variant="contained" size="small">
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
