import { Button, Space } from "antd"

export const AssignRole = ({user}) => {
    const handleAssign = () => {
        console.log(user);
    }
  return (
    <>
    <Space size="middle">
        <Button type="primary" onClick={handleAssign}>Assign role</Button>
    </Space>
    </>
  )
}
