import React from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import Login from "./Login";
import MyNav from "./MyNav";

function LoginPage() {
  return (
    <>
      <Loader TeXTLOADER={"Karriere"} textCount={"1500"} />
      <div className=" overflow-hidden">
        <MyNav display_none={"d-none"} />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
