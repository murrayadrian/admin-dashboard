import { Button, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AddUser = () => {
    const dispatch = useDispatch().userStore;
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const onFinish = (user) => {
        dispatch.addUser(user)
        navigate("/users/list")
      };
    return (
        <div>
            <Typography.Title level={4}>Add user</Typography.Title>
            <Form
                {...formItemLayout}
                layout='horizontal'
                form={form}
                onFinish={onFinish}
            >
                <Form.Item label="Name" name="name">
                    <Input placeholder="name" />
                </Form.Item>
                <Form.Item label="Username" name="userName">
                    <Input placeholder="username" />
                </Form.Item>
                <Form.Item label="Password" name="passWord">
                    <Input placeholder="password" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit">Add user</Button>
                </Form.Item>
            </Form>
        </div>
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
