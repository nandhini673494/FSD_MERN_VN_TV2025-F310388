import { useState } from "react";

function Ques15() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Edit Profile</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={profile.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={profile.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Enter phone"
        value={profile.phone}
        onChange={handleChange}
      />
      <br /><br />

      <h3>Profile Details</h3>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
    </div>
  );
}

export default Ques15;
