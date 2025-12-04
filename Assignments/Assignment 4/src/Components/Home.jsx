import React from "react";
import { Link } from "react-router-dom";
import departments from "./departments.json";
import DepartmentCard from './DepartmentCard';
function Home() {
const top = departments.slice(0, 3);
return (
<div className="home">
<section className="hero">
<div className="hero-content">
<h2>Welcome to College Info Portal</h2>
<p>Discover departments, faculty, courses and facilities.</p>
<Link to="/departments" className="btn">Explore Departments</Link>
</div>
<div className="hero-image" />
</section>
<section className="why">
<h2>Why this college?</h2>
<p>Excellent faculty, industry-aligned curriculum, modern labs and strong placements.</p>
</section>
<section className="top-depts">
<h2>Top Departments</h2>
<div className="cards">
{top.map(d => <DepartmentCard key={d.id} dept={d} />)}
</div>
</section>
<section className="cta">
<Link to="/contact" className="btn">Get in Touch</Link>
</section>
</div>
);
}
export default Home;