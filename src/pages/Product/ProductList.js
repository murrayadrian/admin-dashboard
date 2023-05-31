import {Space, Table } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from 'api/config'
const imgStyle = {
    width: 50,
    height: 50
}


const displayProduct = (e) => {
    console.log('display', e.target.closest("tr").getAttribute("data-row-key"));
}

const deleteProduct = (e) => {
    console.log("delete", e.target.closest("tr").getAttribute("data-row-key"));
}
export const ProductList = ({products, setProducts}) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a onClick={(e) => displayProduct(e)}>{text}</a>,
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
                    <a href=""onClick={(e)=>updateProduct(e)}>Update</a>
                    <a onClick={(e)=>deleteProduct(e)}>Delete</a>
                </Space>
            ),
        },
    ];
    const navigate = useNavigate();
    useEffect(() => {
        console.log('use effect');
        const fetchProduct = async () => {
            const response = await api.get('/products')
            setProducts(response.data)
        }
        fetchProduct()
    },[])
    const updateProduct = (e) => {
       let id = e.target.closest("tr").getAttribute("data-row-key");
       console.log(id);
       navigate("/product/edit",{state:{id}});
    }
    return (
        <Table columns={columns} dataSource={products} pagination={{pageSize: 5}}/>
    )
}

