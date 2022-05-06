import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Ratings() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 3 },
      }}
    >
      <Rating
        className="justify-flex-start align-content-start"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
