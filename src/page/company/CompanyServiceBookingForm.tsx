import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//First request to choose day when slots will be available

function CompanyServiceBookingForm() {
  const [datesAvailableSlots, setDatesAvailableSlots] = useState([]);
  const [timeAvailableSlots, setTimeAvailableSlots] = useState([]);
  const [selectDate, setSelectDate] = useState();

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

  const handleDateChange = async (e) => {
    let selectDate = e.target.value;
    setSelectDate(selectDate);
    console.log(selectDate);

    try {
      let res = await fetch("../public/timeAvailableSlots.json");
      let data = res.json();
      setTimeAvailableSlots(await data);
    } catch (e) {
      console.log("Something went wrong while fetching some data " + e);
    }
  };

  return (
    <>
      <form>
        Choose a date
        <label>Date</label>
        <select onChange={handleDateChange}>
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
          {timeAvailableSlots.length > 0 ? (
            timeAvailableSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))
          ) : (
            <option>No available slots. Choose another date</option>
          )}
        </select>
        <label>Lastname</label>
        <input name=""></input>
        <label>Firstname</label>
        <input name=""></input>
        <label>Email</label>
        <input name="email"></input>
        <input name="country-code"></input>
        <input name="phone"></input>
        <input type="hidden" name="csrf"></input>
        <button type="submit">Choose this slot</button>
      </form>
    </>
  );
}
export default CompanyServiceBookingForm;
