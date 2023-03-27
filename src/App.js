import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import KundenrezensionenComponent from "./components/KundenrezensionenComponent";
import LoginPage from "./components/LoginPage";
import Loader from "./components/Loader";
import BackTop from "./components/BackTop";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <BackTop />
      <Loader TeXTLOADER={"Consaltex"} />
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route
          path="/Kundenrezensionen"
          element={<KundenrezensionenComponent />}
        />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
