/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ categories }) => {
  return (
    <div>
      <Header categories={categories} />
      <main>
        <Outlet />
      </main>
      <Footer categories={categories} />
    </div>
  );
};

export default MainLayout;
