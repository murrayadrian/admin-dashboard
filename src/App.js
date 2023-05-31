import { AddCoupon, CouponList } from 'pages/Coupon'
import { ExportCustomer, CustomerList } from 'pages/Customer'
import { Home } from 'pages/Home'
import { AddUser, UserList } from 'pages/User'
import { Layouts } from "components/Layouts"
import { Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'
import { AddProduct, ShowProducts } from 'pages/Product'
import { OrderList } from 'pages/Order'
import { useState } from 'react'
import api from 'api/config'
import { ProductDetail } from 'pages/Product'
import { EditProduct } from 'pages/Product'

const App = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [editName, setEditName] = useState('')
    const [editPrice, setEditPrice] = useState(0)
    const [editImage, setEditImage] = useState('')

    const handleSubmit = async (e) => {
        console.log("submit");
        e.preventDefault();
        const id = products.length ? products[products.length - 1].key + 1 : 1;
        const newProduct = { id, name: name, price: price, image: image }
        console.log(products);
        const response = await api.post('/products', newProduct)
        const listProduct = [...products, response.data]
        setProducts(listProduct)
        setName('')
        setPrice(0)
        setImage('')
    }

    return (
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="user">
                    <Route path="list" element={<UserList />} />
                    <Route path="add" element={<AddUser />} />
                </Route>
                <Route path="products">
                    <Route path="show" element={<ShowProducts
                        products={products}
                        setProducts={setProducts} />}
                    />
                    <Route path="add" element={<AddProduct
                        handleSubmit={handleSubmit}
                        name={name} setName={setName}
                        price={price} setPrice={setPrice}
                        image={image} setImage={setImage} />}
                    />
                    <Route path=":id" element={<ProductDetail products={products} />} />
                    <Route path="edit/:id" element={<EditProduct
                        products={products} setProducts={setProducts}
                        editName={editName} setEditName={setEditName}
                        editPrice={editPrice} setEditPrice={setEditPrice}
                        editImage={editImage} setEditImage={setEditImage} />} />
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