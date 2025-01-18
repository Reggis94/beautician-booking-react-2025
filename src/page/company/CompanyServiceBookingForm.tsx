import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//First request to choose day when slots will be available

function CompanyServiceBookingForm() {
  const [datesAvailableSlots, setDatesAvailableSlots] = useState([]);
  const [timeAvailableSlots, setTimeAvailableSlots] = useState([]);

  useEffect(() => {
    async function fetchDateAvailableSlots() {
      try {
        let res = await fetch("../public/datesAvailableSlots.json");
        let data = res.json();
        setDatesAvailableSlots(await data);
      } catch (e) {
        console.log("Something went wrong while fetching some data " + e);
      }
    }

    fetchDateAvailableSlots();
  });

  useEffect(() => {
    async function fetchTimeAvailableSlots() {
      try {
        let res = await fetch("../public/timeAvailableSlots.json");
        let data = res.json();
        setTimeAvailableSlots(await data);
      } catch (e) {
        console.log("Something went wrong while fetching some data " + e);
      }
    }
  });

  return (
    <>
      <form>
        Choose a date
        <label>Date</label>
        <select onChange={}>
          {datesAvailableSlots.length > 0 ? (
            datesAvailableSlots.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))
          ) : (
            <option>No available dates</option>
          )}
        </select>
        <label>Time</label>
        <select>
          <option>No available slots</option>
        </select>
      </form>
    </>
  );
}
export default CompanyServiceBookingForm;
