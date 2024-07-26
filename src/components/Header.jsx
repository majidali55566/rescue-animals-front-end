import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <h3>Logo</h3>
      <ul className={`nav-list ${isNavOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/report-incident">Report Incident</Link>
        </li>
        <li>
          <Link to="/register-ngo">Register Ngo</Link>
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
