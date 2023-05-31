import { Button } from "antd";
import { Link } from "react-router-dom"

//this is one of many products inside ShowProducts
export const Product = ({product, handleDelete}) => {
  return (
    <tr>
        <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
        <td>{product.price}</td>
        <td><img src={product.img} alt="img" style={imgStyle}/></td>
        <td><Link to={`/products/edit/${product.id}`}>Update</Link></td>
        <td><Button onClick={()=>handleDelete(product.id)}type="primary">Delete</Button></td>
    </tr>
  )
}
const imgStyle = {
  width: 50,
  height: 50
}