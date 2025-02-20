import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CompanyServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const url = "http://127.0.0.1:8000/api/business/2/service";
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(
            "Something went wrong while fetching some data " + res.status
          );
        }

        const json = await res.json();
        console.log(json);
      } catch (e) {
        console.log(
          "Something went wrong while fetching some data " + e.message
        );
      }
    }
    fetchServices();
  });

  return (
    <>
      <h1
        style={{
          color: "rgb(65, 65, 65)",
          fontWeight: 600,
          fontFamily:
            '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "18px",
          lineHeight: "22px",
        }}
      >
        Select a service
      </h1>
      <div className="service-div">
        <h1>Service 1</h1>
        <p>$100 - 60 minutes</p>
        <p>This service is the best</p>
        <Link to="/company-booking-services/1">
          <button>Book this service</button>
        </Link>
      </div>
      <div className="service-div">
        <h1>Service 1</h1>
        <p>$100 - 60 minutes</p>
        <p>This service is the best</p>
        <button>Book this service</button>
      </div>
    </>
  );
}
export default CompanyServices;
