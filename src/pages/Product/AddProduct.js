import { Button, Form, Input, Typography } from "antd"
import api from 'api/config'

export const AddProduct = ({ products, setProducts, name, setName, price, setPrice, image, setImage }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = products.length ? products[products.length - 1].key + 1 : 1;
        const newProduct = { id, name, price, img: image }
        console.log(products);
        const response = await api.post('/products', newProduct)
        const listProduct = [...products, response.data]
        setProducts(listProduct)
        setName('')
        setPrice(0)
        setImage('')
    }
    const [form] = Form.useForm();
    return (
        <>
            <Typography.Title level={4}>Add Product</Typography.Title>
            <Form
                {...formItemLayout}
                layout='horizontal'
                form={form}
            >
                <Form.Item label="Name">
                    <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="product name" />
                </Form.Item>
                <Form.Item label="Price">
                    <Input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Upload image">
                    <Input value={image} onChange={(e)=>setImage(e.target.value)}placeholder="img" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" onClick={handleSubmit}>Submit</Button>
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


