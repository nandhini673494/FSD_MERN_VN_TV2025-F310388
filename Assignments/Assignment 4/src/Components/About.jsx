import React from "react";
function About() {
return (
<div className="about-page">
<h2>About the College</h2>
<section>
<h3>History</h3>
<p>Established with a vision to provide quality technical and managerial education.</p>
</section>
<section>
<h3>Mission & Vision</h3>
<p>To empower students with knowledge, ethics, and skills to contribute to society and industry.</p>
</section>
<section>
<h3>Achievements</h3>
<div className="achievements-grid">
<div className="card">NAAC A+ Accreditation</div>
<div className="card">Top Recruiters On Campus</div>
<div className="card">Research Grants and Patents</div>
</div>
</section>
</div>
);
}
export default About;