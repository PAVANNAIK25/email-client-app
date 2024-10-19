import React from "react";

const ProfileIcon = ({ profileName }) => {
  return (
    <div
      style={{
        width: "45px",
        height: "45px",
        minWidth: "45px",
        borderRadius: "50%",
        fontSize: "1.2rem",
        fontWeight: "700",
        backgroundColor: "var(--primary)",
        color: "var(--bg-primary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {profileName.slice(0, 1).toUpperCase()}
    </div>
  );
};

export default ProfileIcon;
