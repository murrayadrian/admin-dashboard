import { Button, Form, Input, Typography } from "antd"
import api from 'api/config'
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const EditProduct = ({products,setProducts, editName, setEditName, editPrice, setEditPrice, editImage, setEditImage}) => {
  const {id} = useParams();
  const find = products.find(product => product.id.toString() === id)

  useEffect(()=>{
    if(find){
      setEditName(find.name)
      setEditPrice(find.price)
      setEditImage(find.image)
    }
  },[find, setEditName,setEditPrice, setEditImage])
    const [form] = Form.useForm();

    const handleEdit = async (id) => {
      const updatedProduct = {id, name:editName,price:editPrice,img:editImage}
      const response = await api.put(`/products/${id}`, updatedProduct)
      setProducts(products.map((product)=> product.id.toString() === id ? {...response.data} : product))
  }
    return (
        <>
            <Typography.Title level={4}>Edit Product</Typography.Title>
            <Form
                {...formItemLayout}
                layout='horizontal'
                form={form}
            >
                <Form.Item label="Name">
                    <Input value={editName} onChange={(e)=>setEditName(e.target.value)} placeholder="product name" />
                </Form.Item>
                <Form.Item label="Price">
                    <Input value={editPrice} onChange={(e)=>setEditPrice(e.target.value)} placeholder="input price" />
                </Form.Item>
                <Form.Item label="Upload image">
                    <Input value={editImage} onChange={(e)=>setEditImage(e.target.value)}placeholder="img" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" onClick={()=>handleEdit(find.id)}>Update</Button>
                </Form.Item>
            </Form>
        </>
    )
}
const formItemLayout =
{
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 14,
    },
}
const buttonItemLayout =
{
    wrapperCol: {
        span: 14,
        offset: 4,
    },
}

