import { Outlet } from "react-router-dom";
import Header from "./NavBar";
import Footer from "./Footer";
import React from "react";

const HeaderFooter = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};

export default HeaderFooter;
