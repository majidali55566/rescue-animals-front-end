/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AdminHeader = ({ toggleSidebar }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        padding: "1rem 2rem",
        zIndex: (theme) => theme.zIndex.drawer - 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ marginLeft: 2 }}>
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
