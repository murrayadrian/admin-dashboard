import { useParams } from "react-router-dom"
import styled from "styled-components";

export const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const find = products.find((product) => product.id.toString() === id);

  return (
    <>
      <h2>Product Detail</h2>
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
          <td>{find.name}</td>
          <td>{find.price}</td>
          <td><img src={find.img} alt="img" style={{width:50,height:50}}/></td>
          <td>update</td>
          <td>delete</td>
        </tbody>
      </STable>
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
