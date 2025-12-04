import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Departments from "./Components/Departments.jsx";
import DepartmentDetail from "./Components/DepartmentDetail.jsx";
import Contact from "./Components/Contact.jsx";
function App() {
return (
<div className="app">
<Header />
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/departments" element={<Departments />} />
<Route path="/departments/:deptId" element={<DepartmentDetail />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</div>
);
}
export default App;