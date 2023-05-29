import { Coupon } from 'pages/Coupon'
import { Customer } from 'pages/Customer'
import { Home } from 'pages/Home'
import { Product } from 'pages/Product'
import { User } from 'pages/User'
import {Routes, Route} from 'react-router-dom'


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/customer" element={<Customer/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/coupon" element={<Coupon/>}/>    
        </Routes>
    )
}
export default App