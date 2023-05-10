import React from "react";
import lodding from "./media/lodding.gif";

export default function Spinner() {
  return (
    <div className="container text-center">
      <img src={lodding} alt="lodding" style={{ height: "40px" }} />
    </div>
  );
}
