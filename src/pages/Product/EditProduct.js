import { Button, Form, Input, Typography } from "antd";
import api from "api/config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditProduct = ({ products, setProducts }) => {
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editImage, setEditImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  useEffect(() => {
    if (product) {
      setEditName(product.name);
      setEditPrice(product.price);
      setEditImage(product.img);
    }
  }, [product]);
  const [form] = Form.useForm();

  const handleEdit = async (id) => {
    const updatedProduct = {
      id,
      name: editName,
      price: editPrice,
      img: editImage,
    };
    const response = await api.put(`/products/${id}`, updatedProduct);
    setProducts(
      products.map((product) =>
        product.id.toString() === id ? { ...response.data } : product
      )
    );
    navigate("/products/show");
  };
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
          <Button type="primary" onClick={() => handleEdit(product.id)}>
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
