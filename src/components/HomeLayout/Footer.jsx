/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { generateLinks } from "../../Utils/GenerateLinkUtils";

const Footer = ({ categories }) => {
  const quickLinksCategorie = [
    "Advocacy and Awareness",
    "Media and Achievements",
    "Donations and Fundraising",
  ];
  const generatedQuickLinks = generateLinks(categories, quickLinksCategorie);
  const quickLinks = [
    { label: "Report Animal Incident", link: "/report-animal-incident" },
    { label: "Login", link: "/login" },
    { label: "Sign up", link: "/signup" },
    { label: "Register your NGO", link: "/register-ngo" },
    ...generatedQuickLinks,
  ];
  const informationCategories = [
    "About Us",
    "Contact and Policies",
    "Membership and Volunteering",
  ];
  const generatedInfoLinks = generateLinks(categories, informationCategories);
  const upcommingProjectsLinks = generateLinks(categories, ["Project Reports"]);
  return (
    <footer>
      <div className="contact">
        <h3>Contact</h3>
        <p>
          Raksha Animal, 438 / Bldg. No. 13, Bharat Diamond Bourse, Off BKC,
          Bandra East, Mumbai - 400051. Maharashtra. India.
        </p>
        <br />
        <p>rakshaanimal@gmail.com</p>
      </div>
      <div className="quick-links">
        <h3>Quick links</h3>
        {quickLinks.map((link) => (
          <Link key={link.link} to={link.link}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="information">
        <h3>Information</h3>
        {generatedInfoLinks.map((link) => (
          <Link key={link.link} to={link.link}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="project-reports">
        <h3>Upcoming Projects</h3>
        {upcommingProjectsLinks.map((link) => (
          <Link key={link.link} to={link.link}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
