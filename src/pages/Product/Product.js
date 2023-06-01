import { Button } from "antd";
import { Link } from "react-router-dom"

//this is one of many products inside ShowProducts
export const Product = ({product}) => {
  return (
    <tr>
        <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
        <td>{product.price}</td>
        <td><img src={product.image} alt="img" style={imgStyle}/></td>
        <td><Button style={greenBtn}><Link to={`/products/edit/${product.id}`}>Update</Link></Button></td>
        <td><Button type="primary" danger><Link to={`/products/delete/${product.id}`}>Delete</Link></Button></td>
    </tr>
  )
}
const imgStyle = {
  width: 50,
  height: 50
}

const greenBtn = {
  color: "rgba(0, 0, 0, 0.88)",
  backgroundColor: "green",
};