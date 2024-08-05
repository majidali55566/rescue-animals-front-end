import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportIncidentPage from "./pages/ReportIncidentPage";
import NGOLoginPage from "./components/auth/NgoLogin";
import NGORegistrationPage from "./pages/NgoRegister";
import NgoManagement from "./pages/NgoManagement";
import AdminLayout from "./components/admin/Layouts/AdminLayout";
import AdminHomePage from "./components/admin/AdminHomePage";
import App from "./App";
import PageRenderer from "./components/pages/PageRenderer"; // Import your PageRenderer component
import MainLayout from "./components/HomeLayout/MainLayout";
import CreatePage from "./components/admin/CreatePage";
import Profile from "./components/admin/Profile";

const categories = [
  {
    category: "About Us",
    pages: ["About Us", "Why Us", "Founders Stories", "Mission & Vision"],
  },
  {
    category: "Membership and Volunteering",
    pages: ["Become A Member", "Join As Volunteer"],
  },
  {
    category: "Advocacy and Awareness",
    pages: ["Stop Cruelty to Animals", "How Our Website Works"],
  },
  {
    category: "Media and Achievements",
    pages: ["Our Gallery", "Media & Achievements"],
  },
  {
    category: "Donations and Fundraising",
    pages: ["Donate Now", "Bank Details with QR", "CSR Fundraising"],
  },
  {
    category: "Contact and Policies",
    pages: ["Contact", "Copyrights", "Privacy Policy", "Terms & Conditions"],
  },
  {
    category: "Project Reports",
    pages: [
      "Project Report for Cows",
      "Project Report for Dogs",
      "Project Report for Cats",
      "Project Report for Eagles",
      "Project Report for Snakes",
    ],
  },
  {
    category: "Resources and Downloads",
    pages: ["Downloads"],
  },
  {
    category: "Special Initiatives",
    pages: ["RA Wildlife Sanctuary Park"],
  },
];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout categories={categories} />}>
          <Route path="/" element={<App />} />
          <Route
            path="/report-animal-incident"
            element={<ReportIncidentPage />}
          />
          <Route path="/ngo-login" element={<NGOLoginPage />} />
          <Route path="/register-ngo" element={<NGORegistrationPage />} />
          <Route path="/volunteers-of-ra" element={<h1>Volunteers of RA</h1>} />

          {categories.flatMap((category) =>
            category.pages.map((page) => (
              <Route
                key={`${category.category}/${page}`}
                path={`/${category.category
                  .toLowerCase()
                  .replace(/ /g, "-")}/${page
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                element={
                  <PageRenderer page={page} category={category.category} />
                }
              />
            ))
          )}
        </Route>
        <Route path="/ngo-management" element={<NgoManagement />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/home" element={<AdminHomePage />} />
          <Route path="/admin/create-new-page" element={<CreatePage />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
