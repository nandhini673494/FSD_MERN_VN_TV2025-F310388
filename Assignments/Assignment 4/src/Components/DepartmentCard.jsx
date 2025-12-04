import React from "react";
import { useNavigate } from "react-router-dom";
function DepartmentCard({ dept }) {
const navigate = useNavigate();
return (
<div className="dept-card">
<h3>{dept.name}</h3>
<p>{dept.description}</p>
<div className="card-actions">
<button onClick={() => navigate(`/departments/${dept.id}`)}>View More</button>
</div>
</div>
);
}
export default DepartmentCard;