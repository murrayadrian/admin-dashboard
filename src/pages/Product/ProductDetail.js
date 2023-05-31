import {Table } from "antd";
import { useParams } from "react-router-dom"

export const ProductDetail = ({products}) => {
  const {id} = useParams();
  const find = products.find((product) => product.id.toString() === id);

  return (
    <>
      <h2>Product Detail</h2>
      <Table columns={columns} dataSource={[find]} pagination={false}/>
    </>
  )
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render : (img) => <img style={imgStyle} src={img} alt="img"/>
  },
]
const imgStyle = {
  width: 100,
  height: 100
}