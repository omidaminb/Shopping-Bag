import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-gray-200">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
