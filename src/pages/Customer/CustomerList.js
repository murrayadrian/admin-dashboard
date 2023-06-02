import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExportCustomer } from "./ExportCustomer";

export const CustomerList = () => {
  const state = useSelector((store) => store.customerStore)
  const customers = state.customers;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.customerStore.getCustomers()
  },[dispatch.customerStore])

    return (
      <div>
        <Table
            columns={columns}
            dataSource={customers}
            rowKey="id"
            pagination={{pageSize: 5}}
        />
        <ExportCustomer customers={customers}/>
      </div>
    )
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
  ];