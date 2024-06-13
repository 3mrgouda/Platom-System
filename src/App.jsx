import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Teams from "./pages/Teams";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="members" element={<Members />} />
        <Route path="teams" element={<Teams />} />
        <Route path="events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
