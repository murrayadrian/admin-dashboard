import { AddCoupon, CouponList } from 'pages/Coupon'
import { ExportCustomer, CustomerList } from 'pages/Customer'
import { Home } from 'pages/Home'
import { AddUser, UserList } from 'pages/User'
import { Layouts } from "components/Layouts"
import { Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'
import { AddProduct, DeleteProduct, ShowProducts } from 'pages/Product'
import { OrderList } from 'pages/Order'
import { useEffect, useState } from 'react'
import { ProductDetail } from 'pages/Product'
import { EditProduct } from 'pages/Product'
import api from "api/config"
const App = () => {
    // const [products, setProducts] = useState([])
    

    // useEffect(() => {
    //     console.log("fetch products");
    //     const fetchProduct = async () => {
    //         const response = await api.get('/products')
    //         setProducts(response.data)
    //     }
    //     fetchProduct()
    // }, [])

    // const handleDelete = async(id) => {
    //     await api.delete(`/products/${id}`)
    //     const fillter = products.filter((product) => product.id !== id);
    //     setProducts(fillter);
    // }
    return (
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="user">
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
                <Route path="customer">
                    <Route path="list" element={<CustomerList />} />
                    <Route path="export" element={<ExportCustomer />} />
                </Route>
                <Route path="order">
                    <Route path="list" element={<OrderList />} />
                </Route>
                <Route path="coupon">
                    <Route path="list" element={<CouponList />} />
                    <Route path="add" element={<AddCoupon />} />
                </Route>
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
export default App