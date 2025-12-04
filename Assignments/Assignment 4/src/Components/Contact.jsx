import React, { useState } from "react";
import departments from "./Departments.json";
function Contact() {
const [form, setForm] = useState({ name: "", email: "", department: "", message: "" });
const [submitted, setSubmitted] = useState(null);
function handleChange(e) {
const { name, value } = e.target;
setForm(prev => ({ ...prev, [name]: value }));
}
function handleSubmit(e) {
e.preventDefault();
setSubmitted(form);
setForm({ name: "", email: "", department: "", message: "" });
}
return (
<div className="contact-page">
<h2>Contact Us</h2>
<form className="contact-form" onSubmit={handleSubmit}>
<label>
Name
<input required name="name" value={form.name} onChange={handleChange} />
</label>
<label>
Email
<input required type="email" name="email" value={form.email} onChange={handleChange} />
</label>
<label>
Department
<select required name="department" value={form.department} onChange={handleChange}>
<option value="">Select</option>
{departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
</select>
</label>
<label>
Message
<textarea required name="message" value={form.message} onChange={handleChange} />
</label>
<button className="btn" type="submit">Submit</button>
</form>
{submitted && (
<div className="submitted">
<h3>Submitted Details</h3>
<p><strong>Name:</strong> {submitted.name}</p>
<p><strong>Email:</strong> {submitted.email}</p>
<p><strong>Department:</strong> {submitted.department}</p>
<p><strong>Message:</strong> {submitted.message}</p>
</div>
)}
</div>
);
}
export default Contact;