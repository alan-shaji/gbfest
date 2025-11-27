import React from "react";
import MenuTab from "../components/menuTab";
import Footer from "../components/footer/";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MenuTab />
      <main>
        <Outlet /> {/* ✅ this is where each page will render */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
