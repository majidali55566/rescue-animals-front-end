/* eslint-disable react/prop-types */
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Home, Person, Add } from "@mui/icons-material";

const AdminSideBar = ({ open, onClose, variant }) => {
  const location = useLocation();

  // Helper function to determine if the current path matches
  const isActive = (path) => location.pathname === path;

  // Helper function to apply styles conditionally
  const getStyles = (path) => ({
    color: isActive(path) ? "primary.main" : "inherit",
    bgcolor: isActive(path) ? "rgba(0, 0, 0, 0.1)" : "transparent",
    "&:hover": {
      bgcolor: isActive(path) ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.05)",
    },
  });

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant={variant}
      sx={{
        width: variant === "permanent" ? 240 : "auto",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ width: "5rem", height: "5rem", marginRight: "8px" }}
        />
        <h4>Raksha Animal</h4>
      </Box>
      <List>
        <ListItemButton
          component={Link}
          to="/admin/home"
          sx={getStyles("/admin/home")}
        >
          <ListItemIcon
            sx={{ color: isActive("/admin/home") ? "primary.main" : "inherit" }}
          >
            <Home />
          </ListItemIcon>
          <ListItemText primary="Admin Home" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/admin/profile"
          sx={getStyles("/admin/profile")}
        >
          <ListItemIcon
            sx={{
              color: isActive("/admin/profile") ? "primary.main" : "inherit",
            }}
          >
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/admin/create-new-page"
          sx={getStyles("/admin/create-new-page")}
        >
          <ListItemIcon
            sx={{
              color: isActive("/admin/create-new-page")
                ? "primary.main"
                : "inherit",
            }}
          >
            <Add />
          </ListItemIcon>
          <ListItemText primary="Create a new Page" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default AdminSideBar;
