/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDropDownCircleOutlined, Event } from "@mui/icons-material";
import DropdownMenu from "../DropDownMenu";
import useWindowWidth from "../../hooks/useWindowWidth";
import { generateLinks } from "../../Utils/GenerateLinkUtils";
function Header({ categories }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const homeCategories = [
    "About Us",
    "Membership and Volunteering",
    "Advocacy and Awareness",
  ];

  const newItemsHome = generateLinks(categories, homeCategories);

  // Define menu items for the Project Reports dropdown
  const projectReportsMenuItems = generateLinks(categories, [
    "Project Reports",
  ]).map((item) => ({
    ...item,
    icon: <Event />,
  }));
  return (
    <header>
      <h3>Logo</h3>
      <ul
        className={`nav-list ${isNavOpen && windowWidth < 800 ? "open" : ""}`}
      >
        {windowWidth > 800 ? (
          <>
            <DropdownMenu buttonLabel="Home" menuItems={newItemsHome} />
            <DropdownMenu
              buttonLabel="Project Reports"
              menuItems={projectReportsMenuItems}
            />
          </>
        ) : (
          <>
            <li>
              <div className="d-flex">
                <Link to="/">Home</Link>
                <ArrowDropDownCircleOutlined
                  sx={{ width: "2rem" }}
                  onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                />
              </div>
              {isHomeDropdownOpen && (
                <ul className="menu-list">
                  {newItemsHome.map((item, index) => (
                    <li className="menu-item" key={index}>
                      <Link className="spec" to={item.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <div className="d-flex">
                <Link to="/project-reports">Project Reports</Link>
                <ArrowDropDownCircleOutlined
                  sx={{ width: "2rem" }}
                  onClick={() =>
                    setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
                  }
                />
              </div>
              {isProjectsDropdownOpen && (
                <ul className="menu-list">
                  {projectReportsMenuItems.map((item, index) => (
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
