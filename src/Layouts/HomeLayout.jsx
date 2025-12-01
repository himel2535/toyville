import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../pages/Footer";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <main className=" bg-base-200 px-6 lg:px-14 md:px-10 mx-auto min-h-screen pt-4">
        {state == "loading" ? <Loading /> : <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
