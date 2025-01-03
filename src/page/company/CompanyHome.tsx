import { useParams } from "react-router-dom";
import { useState } from "react";
import "./CompanyHome.css";

function CompanyHome() {
  const { id } = useParams();
  const [contentServicesBookingDisplayer, setContentServicesBookingDisplayer] =
    useState("");
  const [isServicesListVisible, setIsServicesListVisible] = useState(false);
  const [isServicesLoading, setIsServicesLoading] = useState(false);
  function displayServices(id: string) {
    setContentServicesBookingDisplayer("Loading");
    setTimeout(function () {
      setContentServicesBookingDisplayer(
        "This business has no service available for booking"
      );
    }, 2000);
  }

  function toggleServicesVisibility() {
    setIsServicesListVisible((prev) => !prev);
    fetchServices();
    alert(isServicesListVisible);
  }

  function fetchServices() {}

  return (
    <>
      {id}
      <div className="wrapper" style={{ background: "red", height: "1000px" }}>
        HELLO
        <div className="services-booking-displayer">
          {contentServicesBookingDisplayer}
        </div>
      </div>
      <div className="services-footer">
        <button className="services-button" onClick={toggleServicesVisibility}>
          SEE SERVICES AND BOOK NOW
        </button>
        <div
          className={`services-lists ${
            isServicesListVisible ? "visible" : "hidden"
          }`}
        >
          <div>
            <h1>SERVICE 1</h1>
            <p>Azerty az azerty az Azerty az</p>
            <img src=""></img>
          </div>
          <div>
            <h1>SERVICE 1</h1>
            <p>Azerty az azerty az Azerty az</p>
            <img src=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyHome;
