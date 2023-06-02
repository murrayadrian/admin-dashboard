import { AddCoupon, CouponList } from 'pages/Coupon'
import { CustomerList } from 'pages/Customer'
import { Home } from 'pages/Home'
import { AddUser, UserList } from 'pages/User'
import { Layouts } from "components/Layouts"
import { Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'
import { AddProduct, DeleteProduct, ShowProducts } from 'pages/Product'
import { OrderList } from 'pages/Order'
import { ProductDetail } from 'pages/Product'
import { EditProduct } from 'pages/Product'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="users">
                    <Route path="list" element={<UserList />} />
                    <Route path="add" element={<AddUser />} />
                </Route>
                <Route path="products">
                    <Route path="show" element={<ShowProducts/>}
                    />
                    <Route path="add" element={<AddProduct/>}
                    />
                    <Route path=":id" element={<ProductDetail/>}
                    />
                    <Route path="edit/:id" element={<EditProduct/>}
                    />
                    <Route path="delete/:id" element={<DeleteProduct/>}/>
                </Route>
                <Route path="customers" element={<CustomerList />}/>
        
                <Route path="orders">
                    <Route path="list" element={<OrderList />} />
                </Route>
                <Route path="coupons">
                    <Route path="list" element={<CouponList />} />
                    <Route path="add" element={<AddCoupon />} />
                </Route>
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
export default App