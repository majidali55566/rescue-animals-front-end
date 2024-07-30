/* eslint-disable react/prop-types */
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

const AdminSideBar = ({ open, onClose, variant }) => {
  const [openHomeMenu, setOpenHomeMenu] = useState(false);

  const homeMenuItems = [
    { label: "About Us", link: "/home/about-us" },
    { label: "Why Us", link: "/home/why-us" },
    { label: "Mission & Vision", link: "/home/mission-vision" },
    // Add more items as needed
  ];

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
      <List>
        <ListItemButton onClick={() => setOpenHomeMenu(!openHomeMenu)}>
          <ListItemText primary="Home" />
          {openHomeMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={openHomeMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {homeMenuItems.map((item, index) => (
              <ListItemButton key={index} component={Link} to={item.link}>
                <ListItemText primary={item.label} sx={{ pl: 4 }} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton component={Link} to="/report-animal-incident">
          <ListItemText primary="Report Animal Incident" />
        </ListItemButton>
        <ListItemButton component={Link} to="/register-ngo">
          <ListItemText primary="Register Your NGO" />
        </ListItemButton>
        {/* Add more items as needed */}
      </List>
    </Drawer>
  );
};

export default AdminSideBar;
