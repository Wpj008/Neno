import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import OrgChart from "./pages/OrgChart";
import Contact from "./pages/Contact";
import "./assets/styles.css";
import Eglises from "./pages/Eglises";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/organigramme" element={<OrgChart />} />
            <Route path="/nos-eglises" element={<Eglises />} />
            <Route path="/nous-contacter" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
