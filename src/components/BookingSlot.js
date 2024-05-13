import BookingForm from "./BookingForm";
import { useReducer } from "react"
import {submitAPI, fetchAPI} from '../bookingFormAPI';

export default function BookingSlot(){
    const initializeTimes = (date) =>{
        const getDate = fetchAPI(date);
        return getDate;
    }
    const updateTimes = (date) =>{
        const newDate = newDate(date)
        const updateDate = fetchAPI(newDate)
        return updateDate;
    }
    const result = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, result);
    return <>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch}></BookingForm>
    </>
}
