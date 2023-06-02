import { Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserList = () => {

  const [loading, setLoading] = useState(false)
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
  },
  {
    title: 'Password',
    dataIndex: 'passWord',
    width: 150,
  },
];
