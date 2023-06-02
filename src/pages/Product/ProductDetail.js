import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import api from 'api/config'

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  useEffect(()=>{
    const getProduct = async()=>{
      const res = await api.get(`/products/${id}`);
      const product = await res.data;
      setProduct(product)
    }
    getProduct()
  },[id])
  return (
    <>
      <h2>Product Detail</h2>
      {product ? (
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
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt="img" style={imgStyle} />
              </td>
              <td>
                <Button style={greenBtn}>
                  <Link to={`/products/edit/${product.id}`}>Update</Link>
                </Button>
              </td>
              <td>
              <Button type="primary" danger><Link to={`/products/delete/${product.id}`}>Delete</Link></Button>
              </td>
            </tr>
          </tbody>
        </STable>
      ) : (
        <div>No products was found</div>
      )}
    </>
  );
};

const STable = styled.table`
  width: 800px;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid black;
    padding: 8px;
  }
`;
const imgStyle = {
  width: 50,
  height: 50,
};
const greenBtn = {
  color: "rgba(0, 0, 0, 0.88)",
  backgroundColor: "green",
};
