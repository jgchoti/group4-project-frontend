import React from "react";
import { NavLink } from "react-router-dom";
import { FaHouseMedicalCircleExclamation } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 40,
      }}
    >
      <FaHouseMedicalCircleExclamation
        style={{ color: "yellow", fontSize: 200, justifyContent: "center" }}
      />
      <h1 style={{ fontWeight: 500 }}>404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <NavLink
        to="/"
        style={{fontSize:20,color:'white', backgroundColor:'black',padding:10, marginBottom:40, textDecoration:'none'}}
      >
        Go Home
      </NavLink>
    </section>
  );
};

export default NotFoundPage;
