import { AddCoupon, CouponList } from 'pages/Coupon'
import { ExportCustomer, CustomerList } from 'pages/Customer'
import { Home } from 'pages/Home'
import { AddUser, UserList } from 'pages/User'
import { Layouts } from "components/Layouts"
import { Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'
import { AddProduct, ProductList } from 'pages/Product'
import { OrderList } from 'pages/Order'


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="user">
                    <Route path="list" element={<UserList />} />
                    <Route path="add" element={<AddUser />} />
                </Route>
                <Route path="product">
                    <Route path="list" element={<ProductList/>}/>
                    <Route path="add" element={<AddProduct/>}/>
                </Route>
                <Route path="customer">
                    <Route path="list" element={<CustomerList/>}/>
                    <Route path="export" element={<ExportCustomer/>}/>
                </Route>
                <Route path="order">
                    <Route path="list" element={<OrderList/>}/>
                </Route>
                <Route path="coupon">
                    <Route path="list" element={<CouponList/>}/>
                    <Route path="add" element={<AddCoupon/>}/>
                </Route>
            </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
export default App