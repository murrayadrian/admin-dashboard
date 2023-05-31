import { useEffect } from 'react';
import api from 'api/config'
import { Product } from './Product';
import styled from 'styled-components';

export const ShowProducts = ({ products, setProducts }) => {
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await api.get('/products')
            setProducts(response.data)
        }
        fetchProduct()
    }, [products, setProducts])

    const handleDelete= async(id)=>{
        await api.delete(`/products/${id}`)
        const fillter = products.filter((product) => product.id.toString !== id);
        setProducts(fillter)
      }
    return (
        <STable>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <Product key={product.id} product={product} handleDelete={handleDelete} />
                ))}
            </tbody>
        </STable>
    )
}
const STable = styled.table`
    width: 800px;
    border-collapse: collapse;
    td,th {
        border: 1px solid black;
        padding: 8px;
    }
`
