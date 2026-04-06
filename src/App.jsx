import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Expert from "./pages/Expert";
import Services from "./pages/Services";
import Specialties from "./pages/Specialties";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {

  // For Curson move effect

  const ref = useRef(null);

  useEffect(() => {

    const el = ref.current;

    if(!el) return;

    const move = (e) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty("--x", `${x}px`)
      el.style.setProperty("--y", `${y}px`)
    };

    el.addEventListener("mousemove", move);

    return () => {
      el.removeEventListener("mousemove", move);
    };

  }, [])

  // End

  return (
    <>
      {/* <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/expert' element={<Expert />} />
      <Route path='/services' element={<Services />} />
      <Route path='/specialties' element={<Specialties />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/contact' element={<Contact />} />
    </Routes> */}
    

      <div ref={ref} className="effectContainer">
        <Navbar />
        <Home />
      </div>

      <Services />
      <Specialties />
      <About />
      <Expert />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
