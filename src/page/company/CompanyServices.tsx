import { Link } from "react-router-dom";

function CompanyServices() {
  return (
    <>
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
