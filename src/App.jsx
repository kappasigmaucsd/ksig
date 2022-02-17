import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { useOnClickOutside } from "./hooks";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

import "./scss/App.scss";

/* Burger menu */
import Navbar from "./components/navbar";

/* import homepage components */
import Opening from "./components/Opening";
import Home from "./components/Home";
// import About from "./components/about";
// import Rush from "./components/rush";
// import Leadership from "./components/leadership";
// import ContactForm from "./components/contact";
import Footer from "./components/footnote";

const App = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const menuId = "main-menu";
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {isLoading ? (
        <Opening />
      ) : (
        <>
          <Navbar open={open} setOpen={setOpen} node={node} menuId={menuId} />

          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/rush" element={<Rush />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<ContactForm />} /> */}
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </div>

          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;