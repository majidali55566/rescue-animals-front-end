/* eslint-disable react/prop-types */
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

function DropdownMenu({ buttonLabel, menuItems }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <li onMouseLeave={handleMouseLeave}>
      <Button
        href="#text-buttons"
        id={`${buttonLabel}-button`}
        aria-controls={open ? `${buttonLabel}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleMouseEnter}
        onMouseEnter={handleMouseEnter}
      >
        {buttonLabel}
      </Button>
      <Menu
        id={`${buttonLabel}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave}
        MenuListProps={{
          "aria-labelledby": `${buttonLabel}-button`,
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            className="menu-item"
            onClick={handleMouseLeave}
            key={index}
          >
            <ListItemIcon
              className="menu-item-icon"
              sx={{ color: "hsl(129, 61%, 52%)" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <Link
                className="nav-link"
                style={{ textDecoration: "none" }}
                to={item.link}
              >
                {item.label}
              </Link>
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </li>
  );
}

export default DropdownMenu;
