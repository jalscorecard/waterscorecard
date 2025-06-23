import React from "react";
import banner from "../assets/banner.png";

function Start({ onNext }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        padding: "32px",
        borderRadius: "18px",
        background: "linear-gradient(135deg, #b2ebf2 0%, #e1f5fe 100%)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      }}
    >
      <img
        src={banner}
        alt="Jal Smruti Banner"
        style={{
          maxWidth: "100%",
          borderRadius: "12px",
          marginBottom: "24px",
          boxShadow: "0 2px 12px 0 rgba(31, 38, 135, 0.10)",
        }}
      />
      <h1
        style={{
          color: "#1976d2",
          fontWeight: 700,
          fontSize: "2.5rem",
          marginBottom: "32px",
        }}
      >
        Jal Smruti Apartment Building Water Scorecard Assessment Input Form
      </h1>
      <button
        className="mui-btn"
        style={{ marginTop: "40px" }}
        onClick={onNext}
      >
        Start Assessment
      </button>
    </div>
  );
}

export default Start;
