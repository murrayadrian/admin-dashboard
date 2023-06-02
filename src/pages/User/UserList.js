import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true)
  const userStore = useSelector((state) => state.userStore)
  const users = userStore.users;
  const dispatch = useDispatch();
  
  useEffect(() => {
    setLoading(true)
    dispatch.userStore.getUsers()
    setLoading(false)
  }, [dispatch.userStore])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
          <Button style={greenBtn} onClick={showModal}>Update</Button>
          <Button type="primary" danger>Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        rowKey="id"
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

const greenBtn = {
  color: "rgba(0, 0, 0, 0.88)",
  backgroundColor: "green",
}