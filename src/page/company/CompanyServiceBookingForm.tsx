import { Link } from "react-router-dom";

function CompanyServiceBookingForm() {
  return (
    <>
      <form>
        Choose a date
        <Link to="">See earlier available slots</Link>
        <div>
          <span>07 Jan 25</span>
          <input type="radio">9AM</input>
          <input type="radio">9.10AM</input>
        </div>
        <div>
          <span>07 Jan 25</span>
          <input type="radio">9AM</input>
          <input type="radio">9.10AM</input>
        </div>
        <div>
          <span>07 Jan 25</span>
          <input type="radio">9AM</input>
          <input type="radio">9.10AM</input>
        </div>
        <div>
          <span>07 Jan 25</span>
          <input type="radio">9AM</input>
          <input type="radio">9.10AM</input>
        </div>
        <div>
          <span>07 Jan 25</span>
          <input type="radio">9AM</input>
          <input type="radio">9.10AM</input>
        </div>
        <Link to="">See more available slots</Link>
        <label>Question 1</label>
        <input type="text"></input>
        <label>Question 1</label>
        <input type="text"></input>
        <button type="submit">BOOK THIS SERVICE</button>
      </form>
    </>
  );
}
export default CompanyServiceBookingForm;
