import { Tabs, Typography } from "antd"
import dayjs from 'dayjs';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const OrderList = () => {
  const dispatch = useDispatch().orderStore;
  useEffect(()=>{
    const fetchOrder=async()=>{
      await dispatch.getOrders();
    }
    fetchOrder()
  },[dispatch])
  const orders = useSelector((state) => state.orderStore.orders);
  const items = [
    {
      key: '1',
      label: `All (${orders.length})`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Ordered`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Packed`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '4',
      label: `In Transit`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '5',
      label: `Delivered`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '6',
      label: `Canceled`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <>
      <Typography.Title level={2}>Order List</Typography.Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}
const onChange = (key) => {
  console.log(dayjs(Date.now()).format('YYYY-MM-DD-HH-mm-ss'));
};
