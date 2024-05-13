
import React, { useState } from "react"
import { Link } from "react-router-dom";
export default function BookingForm(props){
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [date, setDate] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();
    const [comments, setComments] = useState();
    const [time, setTime] = useState();

    function changeDate(e){
        setDate(e.target.value)
        const timeList = ["17:00","18:00","19:00","20:00","21:00","22:00"];
        setTime(timeList.map((times) => <option>{times}</option>));
    }

    return <>
        <div id="background">
                <h1>Book Now</h1>
        </div>
        <div className="form-grid">
            <h2 style={{color: "black", marginLeft:'3.5rem'}}><u>Reservation Form</u></h2>
            <form style={{display: "grid", maxWidth: "200px", gap:"20px", marginLeft:"2.5em"}}>
                {/*First Name*/}
                <label htmlFor="firstName">First Name: </label>
                <input type="text"
                placeholder="First Name" id="firstName"
                value={name} onChange={e=>{setName(e.target.value)}} required>
                </input>

                {/*Phone Number*/}
                <label htmlFor="phone">Contact Info: </label>
                <input type="tel" placeholder="XXX-XXX-XXXX" id="phone"
                value={phone} onChange={e=>setPhone(e.target.value)} required>
                </input>

                {/*Date of reservation*/}
                <label htmlFor="res-date">Choose Date</label>
                <input type="date" id="res-date"
                value={date} onChange={changeDate} required>
                </input>

                {/*Time of reservation*/}
                <label htmlFor="res-time">Choose Time</label>
                <select id="res-time" required placeholder="00:00">
                    {time}
                </select>

                {/*Number of guests*/}
                <label htmlFor="guests">Number of Guests: </label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"
                value= {guests} onChange={e=>setGuests(e.target.value)} required></input>

                <label htmlFor="occasion">Occasion: </label>
                <select id="occasion" onChange={e=>setOccasion(e.target.value)}>
                    <option value={occasion}>Birthday</option>
                    <option value={occasion}>Anniversary</option>
                </select>

                {/*Comments */}
                <label htmlFor="comments">Comments:</label>
                <textarea id="comments" name="comments"
                value={comments} onChange={e=>setComments(e.target.value)} rows={10}>
                </textarea>

                <Link to="/booking_success">
                <input type="submit" value="Make Your Reservation" id="submit_reservation">
                    </input>
                </Link>
            </form>
        </div>
    </>
}