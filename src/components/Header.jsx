import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowDropDownCircleOutlined,
  EmojiPeople,
  Event,
  Group,
  Home,
  Info,
  People,
  Pets,
  QuestionMark,
  Stars,
  VolunteerActivism,
} from "@mui/icons-material";
import DropdownMenu from "./DropDownMenu";
import useWindowWidth from "../hooks/useWindowWidth";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const windowWidth = useWindowWidth();

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
    {
      icon: <QuestionMark />,
      label: "Why Us",
      link: "/home/why-us",
    },
    {
      icon: <Stars />,
      label: "Mission & Vision",
      link: "/home/mission-vision",
    },
    {
      icon: <Group />,
      label: "Become Member",
      link: "/home/become-member",
    },
    {
      icon: <VolunteerActivism />,
      label: "Join as Volunteer",
      link: "/home/join-as-volunteer",
    },
    {
      icon: <EmojiPeople />,
      label: "Inspiration",
      link: "/home/inspiration",
    },
    {
      icon: <People />,
      label: "Members",
      link: "/home/members",
    },
    {
      icon: <Pets />,
      label: "Stop Cruelty of Animals",
      link: "/home/cruelty-of-animals",
    },
    {
      icon: <People />,
      label: "Volunteers",
      link: "/home/volunteers",
    },
    {
      icon: <Event />, // Use StoryIcon or another icon that fits the context
      label: "Founders Stories",
      link: "/home/founders-stories",
    },
  ];

  return (
    <header>
      <h3>Logo</h3>
      <ul
        className={`nav-list ${isNavOpen && windowWidth < 800 ? "open" : ""}`}
      >
        {windowWidth > 800 ? (
          <DropdownMenu buttonLabel="Home" menuItems={homeMenuItems} />
        ) : (
          <>
            <li>
              <div className="d-flex ">
                <Link to="/">Home</Link>
                <ArrowDropDownCircleOutlined
                  sx={{ width: "2rem" }}
                  onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                />
              </div>

              {isHomeDropdownOpen && (
                <ul className="menu-list">
                  {homeMenuItems.map((item, index) => (
                    <li className="menu-item" key={index}>
                      <Link className="spec" to={item.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </>
        )}
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
        <li>
          <Link to="/admin/home">admin home</Link>
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
