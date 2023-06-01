import { Product } from './Product';
import styled from 'styled-components';
import api from 'api/config'
import { useEffect, useState } from 'react';

export const ShowProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getProducts=async()=>{
            const response = await api.get('/products');
            setProducts(response.data)
        }
        getProducts()
    },[])

    return (
        <>
        {products.length==0?
            <h2>No products was found</h2> :
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
                        <Product key={product.id} product={product} />
                    ))}
                </tbody>
            </STable>
        }
        </>
        
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
