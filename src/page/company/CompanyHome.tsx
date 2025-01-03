import { useParams } from "react-router-dom";
import { useState } from "react";

function CompanyHome() {
  const { id } = useParams();
  const [contentServicesBookingDisplayer, setContentServicesBookingDisplayer] =
    useState("");

  function displayServices(id: string) {
    setContentServicesBookingDisplayer("Loading");
    setTimeout(function () {
      setContentServicesBookingDisplayer(
        "This business has no service available for booking"
      );
    }, 2000);
  }

  return (
    <>
      {id}
      <div className="services-booking-displayer">
        {contentServicesBookingDisplayer}
      </div>
      <button onClick={() => displayServices(id)}>BOOK NOW</button>{" "}
    </>
  );
}

export default CompanyHome;
