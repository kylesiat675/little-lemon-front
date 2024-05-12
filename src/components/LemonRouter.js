import {Route, Routes} from 'react-router-dom'
import Main from './Main'
import About from './About'
import Menu from './Menu'
import Reservation from './Reservation'
import OrderOnline from './OrderOnline'
import Login from './Login'

export default function LemonRouter(){
    return (
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/reservations" element={<Reservation/>}></Route>
            <Route path="/order" element={<OrderOnline/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}