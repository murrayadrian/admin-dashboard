import { Button, Modal, Space } from "antd"
import { useState } from "react";
import { useDispatch } from "react-redux";

export const AssignRole = ({user}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch().userStore;

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      handleAssign()
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleAssign = async() => {
      const copy = {...user};
      if(copy.role === "guest") {
        copy.role = "admin"
      }else{
        copy.role = "guest"
      }
      await dispatch.assignAdmin(copy)
    }
  return (
    <Space size="middle">
      {user.role !=="admin"?
        <Button type="primary" onClick={showModal}>Assign admin</Button>:
        <Button type="primary" danger onClick={showModal}>Remove admin</Button>
      }
        <Modal title="Delete" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {user.role !=="admin"?
            <p>Assign {user.name} to admin?</p>:
            <p>Remove {user.name} from admin?</p>
        }
        </Modal>
    </Space>
  )
}
