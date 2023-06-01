import Excel from "components/Excel"
import api from 'api/config'
import { useEffect, useState } from "react"
import { Button } from "antd"


export const ExportCustomer = () => {
  const [ customers, setCustomers] = useState([])
  useEffect(()=>{
    const getCustomers = async() =>{
      const res = await api.get("/customers")
      setCustomers(res.data)
    }
    getCustomers()
  },[])
  const data=[
    {
      columns: [
        {
          title: "Customer Id",
          dataIndex: "id",
          width: 10,
        },
        {
          title: "Name",
          dataIndex: "name",
          width: 20,
        },
        {
          title: "Age",
          dataIndex: "age",
          width: 30,
        },
      ],
      data: customers,
      tabName: "info",
    }
  ]
    return (
        <div>
          {customers.length === 0 ? <h2>No customers</h2>:
          <Excel fileName="export-customers" data={data}>
            <Button>Export customers</Button>
          </Excel>
          }
        </div>
    )
}

