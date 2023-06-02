import { Table } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "api";

export const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      setLoading(true)
      getUsers().then((res)=>{
        setUsers(res.users)
        setLoading(false)
      })
    },[])

    return (
        <div>
            <Table
            loading={loading}
            columns={columns}
            rowKey="id"
            dataSource={users}
            pagination={{pageSize: 5}}
            />
        </div>
    )
}
const columns = [
    {
      title: 'name',
      dataIndex: 'firstName',
      width: 150,
    },
    {
      title: 'username',
      dataIndex: 'username',
    },
    {
      title: 'email',
      dataIndex: 'email',
      width: 150,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'city',
      dataIndex: 'address',
      render: (value) => <div>{value.city}</div>
    },
    {
      title: 'picture',
      dataIndex: 'image',
      render:(value)=><img style={imgStyle} src={value} alt='img'/>,
    }
  ];

  const imgStyle = {
    width: 100,
    height: 100
}