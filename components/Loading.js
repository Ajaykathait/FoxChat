import React from "react";

export default function Loading() {
  return (
    <>
      <div
        style={{
          fontSize: "5rem",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color:'#fff',
          fontWeight:'600'
        }}
      >
        Loading...
      </div>
    </>
  );
}
