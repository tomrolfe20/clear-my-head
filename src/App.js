import React from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PubForm from "./components/pubform/PubForm";
import PubList from "./components/pubList/PubList";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/FindPub' element={<PubList />}></Route>
          <Route path='/AddPub' element={<PubForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
