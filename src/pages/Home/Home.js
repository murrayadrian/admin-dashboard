import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons"
import { Space, Statistic, Typography } from "antd"
import Card from "antd/es/card/Card"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


const DashboardCard = ({icon,title,value}) => {
  return(
    <Card style={cardStyle}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value}></Statistic>
      </Space>
    </Card>
  )
}
const cardStyle = {
  width : 200,
  height: 120
}
const iconStyle = {
  color:'green',
  backgroundColor:'rgba(0,0,255,0.25)',
  borderRadius:20,
  fontSize:24,
  padding:8,
}
export const Home = () => {
  return (
      <Space size={20} direction='vertical'>
        <Typography.Title level={4}>DashBoard</Typography.Title>
        <Space direction = 'horizontal'>
          <DashboardCard icon={<UserOutlined style={iconStyle}/>} title='Users' value={3}></DashboardCard>
          <DashboardCard icon={<ShoppingOutlined style={iconStyle}/>} title='Products' value={100}></DashboardCard>
          <DashboardCard icon={<UserOutlined style={iconStyle}/>} title='Orders' value={1000}></DashboardCard>
          <DashboardCard icon={<DollarCircleOutlined style={iconStyle}/>} title='Revenue' value={10000000}></DashboardCard>
        </Space>
        <DashBoardChart/>
      </Space>
  )
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'revenue',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: labels.map(() => Math.floor(Math.random(0,1)*20000000)+1),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
const DashBoardChart = ()=>{
  return <Bar options={options} data={data} />;
}