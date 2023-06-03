import { Button, Space } from "antd"

export const AssignRole = ({user}) => {
    const handleClick = () => {
        console.log(user);
    }
  return (
    <>
    <Space size="middle">
        <Button type="primary" onClick={handleClick}>Assign role</Button>
    </Space>
    </>
  )
}
