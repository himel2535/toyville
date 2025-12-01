import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../pages/Footer";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <main className=" bg-base-200 px-6 lg:px-14 md:px-10 mx-auto min-h-screen">
        {state == "loading" ? <Loading /> : <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
