import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function DepartmentDetail() {
const { deptId } = useParams();
const navigate = useNavigate();
const [dept, setDept] = useState(null);
useEffect(() => {
import("./data.json").then(module => {
const list = module.default || module;
const found = list.find(x => x.id === deptId);
setDept(found);
});
}, [deptId]);
if (!dept) return <div className="center">Department not found</div>;
return (
<div className="dept-detail">
<button className="back" onClick={() => navigate(-1)}>Back</button>
<h2>{dept.name}</h2>
<p>{dept.fullDescription}</p>
<section>
<h3>Courses Offered</h3>
<ul>{dept.courses.map(c => <li key={c}>{c}</li>)}</ul>
</section>
<section>
<h3>Faculty</h3>
<ul>{dept.faculty.map(f => <li key={f}>{f}</li>)}</ul>
</section>
<section>
<h3>Labs & Facilities</h3>
<ul>{dept.labs.map(l => <li key={l}>{l}</li>)}</ul>
</section>
</div>
);
}
export default DepartmentDetail;