import { useState } from "react";
import CaseManagement from "../components/Ngo/CaseManagement";
import { Link } from "react-router-dom";
import VolunteerManagement from "../components/Ngo/VolunteerManagement";
function NgoManagement() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header>
        <h3>Logo</h3>
        <h3>WELCOME (NGO)</h3>
        <ul className={`nav-list ${isNavOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="">Fundraising</a>
          </li>

          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
        <img width={24} height={24} src="/svgs/profile.svg" alt="" />
        <img
          width={38}
          height={38}
          id="humburger-icon"
          src="/svgs/burger-simple-svgrepo-com.svg"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </header>
      <div className="ngo-management-container">
        <CaseManagement />
        <VolunteerManagement />
      </div>
    </>
  );
}

export default NgoManagement;
