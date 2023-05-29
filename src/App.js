import { Coupon } from 'pages/Coupon'
import { Customer } from 'pages/Customer'
import { Home } from 'pages/Home'
import { Product } from 'pages/Product'
import { AddUser, UserList } from 'pages/User'
import { Layouts } from "components/Layouts"
import { Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/user/add" element={<AddUser />} />
                <Route path="/coupon" element={<Coupon />} />
            </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
export default App