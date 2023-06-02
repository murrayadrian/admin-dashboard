import Excel from "components/Excel"
import { useEffect } from "react"
import { Button } from "antd"
import { useSelector, useDispatch } from "react-redux"

export const ExportCustomer = () => {

  const customerStore = useSelector((state) => state.customerStore)
  const customers = customerStore.customers;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.customerStore.getCustomers()
  },[dispatch.customerStore])

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

