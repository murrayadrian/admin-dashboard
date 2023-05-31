import { Product } from './Product';
import styled from 'styled-components';

export const ShowProducts = ({ products, handleDelete }) => {

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
