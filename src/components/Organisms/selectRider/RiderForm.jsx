import React from "react";
import { NavBar, Footer } from "../../Molecules";
import RiderRequestForm from "../../Molecules/RiderRequestForm/RiderRequestForm";
import SelectRiderStyle from "./SelectRider.style";

function RiderForm() {
    return (
    <>
      <NavBar />
      <SelectRiderStyle>
        <div className="banner">
          <h2>Contact your Dispatch Riders</h2>
          <h3>We have them all just for you. Make your Order to your favorite dispatch rider.</h3>
        </div>
        <div className="today">
          <RiderRequestForm/>
        </div>
      </SelectRiderStyle>
      <Footer />
    </>
  );
}

export default RiderForm;
