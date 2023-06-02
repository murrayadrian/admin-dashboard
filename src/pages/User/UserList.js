import { Button, Space, Table } from "antd";
import { DeleteButton, UpdateButton } from "components/ModalCustom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserList = () => {
  const [loading, setLoading] = useState(true)
  const userStore = useSelector((state) => state.userStore)
  const users = userStore.users;
  const dispatch = useDispatch();
  
  useEffect(() => {
    setLoading(true)
    dispatch.userStore.getUsers()
    setLoading(false)
  }, [dispatch.userStore])

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        rowKey="id"
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />
    </div>
  )
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Username',
    dataIndex: 'userName',
    width: 150,
  },
  {
    title: 'Password',
    dataIndex: 'passWord',
    width: 150,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    width: 150,
    render: (role) => (
      <Space size="middle">
        <button style={{padding:8,border:'2px solid green', color:'green'}}>{role}</button>
      </Space>
    ),
  },
  {
    title: 'Set role',
    render:()=>(
      <Space size="middle">
        <Button type="primary">Set role</Button>
      </Space>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <UpdateButton/>
        <DeleteButton/>
      </Space>
    ),
  },
];