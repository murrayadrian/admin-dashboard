import { Link } from "react-router-dom"

export const Product = ({product}) => {
  return (
    <tr>
        <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
        <td>{product.price}</td>
        <td><img src={product.image} style={{width:50,height:50}}/></td>
    </tr>
  )
}
