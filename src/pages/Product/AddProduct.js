import { Button, Space, Table } from 'antd';
import { useState } from 'react';

const imgStyle = {
    width: 50,
    height: 50
}
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span>{text}</span>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render:(value)=><img style={imgStyle} src={value} alt="img"/>
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a onClick={(e)=>updateProduct(e)}>Update</a>
                <a onClick={(e)=>deleteProduct(e)}>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: 1,
        name: 'Iphone',
        price: 100,
        image: 'https://i2-prod.mirror.co.uk/incoming/article11159435.ece/ALTERNATES/n310p/0_Apple-launch-iPhone-X-Cupertino-USA-12-Sep-2017.jpg',
    },
    {
        key: 2,
        name: 'Samsung',
        price: 200,
        image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_28973/samsung-galaxy-_main_481_450.png.webp',
    },
    {
        key: 3,
        name: 'Realme',
        price: 150,
        image: 'https://m.media-amazon.com/images/I/51WDCoio+4L.jpg',
    },
   
];
const updateProduct = (e) => {
    console.log("update", e.target.closest("tr").getAttribute("data-row-key"));
}
const deleteProduct = (e) => {
    console.log("delete", e.target.closest("tr").getAttribute("data-row-key"));
}
export const AddProduct = () => {
    const [products,setProducts] = useState([data])
    console.log(products.push({name:'abc'}));
    return (
        <Space direction='vertical'>
            <Button type="primary">Add product</Button>
            <Table columns={columns} dataSource={data} pagination={{pageSize: 5}}/>
        </Space>
    )
}

