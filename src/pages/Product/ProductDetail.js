import { Button } from "antd";
import { Link, useParams } from "react-router-dom"
import styled from "styled-components";

export const ProductDetail = ({ products, handleDelete }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

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
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td><img src={product.img} alt="img" style={imgStyle}/></td>
          <td><Link to={`/products/edit/${product.id}`}>Update</Link></td>
          <td><Button onClick={()=>handleDelete(product.id)}type="primary">Delete</Button></td>
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
const imgStyle = {
  width: 50,
  height: 50
}
