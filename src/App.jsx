import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import Control from "./pages/controll/Control";
import ControlNav from "./pages/controll/ControlNav";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  const homePage = (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
  const ControlPage = (
    <div className="flex flex-col h-screen justify-between">
      <ControlNav />
      <Control />
      <Footer />
    </div>
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="controller" element={ControlPage}>
            <Route path="members" element={"members"} />
            <Route path="teams" element={"teams"} />
            <Route path="events" element={"events"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
