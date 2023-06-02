import { Button, Form, Input, Typography } from "antd";
import api from "api/config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditProduct = () => {
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editImage, setEditImage] = useState("");
 
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async()=>{
      const res = await api.get(`/products/${id}`);
      const product = await res.data;
      if(product){
        setEditName(product.name)
        setEditPrice(product.price)
        setEditImage(product.image)
      }
    }
    getProduct()
    },[id, navigate])
  
  const handleSubmit = async (id) => {
    const updatedProduct = {
      id,
      name: editName,
      price: editPrice,
      image: editImage,
    };
    await api.put(`/products/${id}`, updatedProduct);
    navigate("/products/show");
  };
  const [form] = Form.useForm();
  return (
    <>
      <Typography.Title level={4}>Edit Product</Typography.Title>
      <Form {...formItemLayout} layout="horizontal" form={form}>
        <Form.Item label="Name">
          <Input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="product name"
          />
        </Form.Item>
        <Form.Item label="Price">
          <Input
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            placeholder="input price"
          />
        </Form.Item>
        <Form.Item label="Edit image">
          <Input
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            placeholder="img"
          />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" onClick={() => handleSubmit(id)}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
};
const buttonItemLayout = {
  wrapperCol: {
    span: 14,
    offset: 4,
  },
};
