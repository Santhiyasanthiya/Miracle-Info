import React, { useEffect, useState } from "react";

import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import Main from "./pages/Main";
import Aboutme from "./pages/Aboutme";
import Whatido from "./pages/Whatido";
import Contact from "./pages/Contact";
import { globalStyles } from "./portfolio";
import Loader from "./components/loaders/Loader";
import ReactGA from "react-ga";
import Healthcare from "./pages/Healthcare";
import InformationTech from "./pages/InformationTech";
import AiAr from "./pages/AiAr";
import Footer from "./pages/Footer";
ReactGA.initialize("UA-208216831-1");

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const maincontent = (
   
    
    <div>
    <Navbar />
    <Main />   
      <Whatido />
      <Healthcare/>
      <InformationTech />
      <AiAr />
      <Aboutme />
      <Contact />
      <Footer />
    </div>
   
  );

  return <div style={globalStyles}>{loading ? <Loader /> : maincontent}</div>;
}

export default App;
