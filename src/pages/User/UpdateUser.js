import { Button, Modal } from "antd";
import { useState } from "react";


export const UpdateUser = ({user}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        console.log(user);
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button style={updateBtn} type="primary" onClick={showModal}>
                Update
            </Button>

            <Modal title="Update" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Name</p>
                <p>User</p>
                <p>Password</p>
            </Modal>
        </>
    )
}
const updateBtn = {
    color: "rgba(0, 0, 0, 0.88)",
    backgroundColor: "green",
  }