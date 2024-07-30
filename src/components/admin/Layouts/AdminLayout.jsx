import { useState } from "react";
import AdminHeader from "../AdminHeader";
import AdminSideBar from "../AdminSideBar";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const isSmallScreen = windowWidth < 800;
  const variant = isSmallScreen ? "temporary" : "permanent";

  return (
    <>
      <AdminHeader toggleSidebar={toggleSidebar} />
      <AdminSideBar
        open={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
        variant={variant}
      />
      <main
        style={{
          marginLeft: !isSmallScreen ? "240px" : "0",
          transition: "margin 0.3s",
          padding: "20px",
          marginTop: "5rem", // Adjust based on header height
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
