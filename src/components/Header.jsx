import { useState } from "react";
import { Link } from "react-router-dom";

import {
  EmojiPeople,
  Favorite,
  Group,
  Home,
  Info,
  People,
  QuestionMark,
  Stars,
  VolunteerActivism,
} from "@mui/icons-material";
import DropdownMenu from "./DropDownMenu";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const homeMenuItems = [
    {
      icon: <Home />,
      label: "Home",
      link: "/",
    },
    {
      icon: <Info />,
      label: "About Us",
      link: "/home/About-us",
    },
    { icon: <QuestionMark />, label: "Why Us", link: "/home/why-us" },
    {
      icon: <Stars />,
      label: "Mission & Vision",
      link: "/home/mission-vision",
    },
    { icon: <Group />, label: "Become Member", link: "/home/become-member" },
    {
      icon: <VolunteerActivism />,
      label: "Join as Volunteer",
      link: "/home/join-as-volunteer",
    },
    { icon: <EmojiPeople />, label: "Inspiration", link: "/home/inspiration" },
    { icon: <People />, label: "Members", link: "/home/members" },
    { icon: <People />, label: "Volunteers", link: "/home/volunteers" },
  ];

  return (
    <header>
      <h3>Logo</h3>
      <ul className={`nav-list ${isNavOpen ? "open" : ""}`}>
        <DropdownMenu buttonLabel="Home" menuItems={homeMenuItems} />
        <li>
          <Link to="/report-animal-incident">Report animal incident</Link>
        </li>
        <li>
          <Link to="/register-ngo">Register your Ngo</Link>
        </li>
        <li>
          <a href="">Sign up</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <Link to="/ngo-management">ngo management</Link>
        </li>
      </ul>

      <img
        width={38}
        height={38}
        id="humburger-icon"
        src="/svgs/burger-simple-svgrepo-com.svg"
        onClick={() => setIsNavOpen(!isNavOpen)}
      />
    </header>
  );
}

export default Header;
