import { AppBar, Toolbar, Typography } from "@mui/material";

export const AppBarComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          <h1>Our Products</h1>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
