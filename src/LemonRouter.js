import {Route, Routes} from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import Menu from './components/Menu'
import BookingForm from './components/BookingForm'
import OrderOnline from './components/OrderOnline'
import Login from './components/Login'
import BookingConfirmation from './components/BookingConfirmation'

export default function LemonRouter(){
    return (
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/reservation" element={<BookingForm/>}></Route>
            <Route path="/booking_success" element={<BookingConfirmation/>}></Route>
            <Route path="/order" element={<OrderOnline/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}