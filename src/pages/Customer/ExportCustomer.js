import Excel from "components/Excel"
import { Button } from "antd"

export const ExportCustomer = ({customers}) => {

  const data=[
    {
      columns: [
        {
          title: "Customer id",
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
          {customers.length === 0 ? 
            <h2>No customers was found</h2>:
            <Excel fileName="customers" data={data}>
              <Button>Export customers</Button>
            </Excel>
          }
        </div>
    )
}

