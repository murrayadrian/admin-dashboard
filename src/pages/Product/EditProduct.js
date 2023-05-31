import { Button, Form, Input, Typography } from "antd"
import { useLocation } from "react-router-dom"

// const formItemLayout =
// {
//     labelCol: {
//         span: 4,
//     },
//     wrapperCol: {
//         span: 14,
//     },
// }
// const buttonItemLayout =
// {
//     wrapperCol: {
//         span: 14,
//         offset: 4,
//     },
// }

export const EditProduct = () => {
  console.log("EditProduct");
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get('id')
    // const [form] = Form.useForm();
    // return (
    //     <>
    //         <Typography.Title level={4}>Add Product</Typography.Title>
    //         <Form
    //             {...formItemLayout}
    //             layout='horizontal'
    //             form={form}
    //         >
    //             <Form.Item label="Name">
    //                 <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="product name" />
    //             </Form.Item>
    //             <Form.Item label="Price">
    //                 <Input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="input price" />
    //             </Form.Item>
    //             <Form.Item label="Upload image">
    //                 <Input value={image} onChange={(e)=>setImage(e.target.value)}placeholder="img" />
    //             </Form.Item>
    //             <Form.Item {...buttonItemLayout}>
    //                 <Button type="primary">Update</Button>
    //             </Form.Item>
    //         </Form>

    //     </>
    // )
}


