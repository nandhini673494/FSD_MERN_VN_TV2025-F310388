import React from "react";

function ProfileCard({ name, role, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      width: "220px",
      borderRadius: "10px",
      textAlign: "center",
      margin: "10px"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100%", borderRadius: "10px" }} 
      />
      <h3>{name}</h3>
      <p>{role}</p> 
    </div>
  );
}

export default function Ques3() {
  return (
    <div style={{ display: "flex" }}>
      <ProfileCard
        name="Satya Nadella"
        role="CEO, Microsoft"
        image="https://upload.wikimedia.org/wikipedia/commons/4/4f/Satya_Nadella_%28cropped%29.jpg"
      />

      <ProfileCard
        name="Tim Cook"
        role="CEO, Apple"
        image="https://upload.wikimedia.org/wikipedia/commons/f/fa/Tim_Cook_2020.jpg"
      />

      <ProfileCard
        name="Sheryl Sandberg"
        role="Former COO, Meta"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8b/Sheryl_Sandberg_2013.jpg"
      />
    </div>
  );
}
