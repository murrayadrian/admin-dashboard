import { Button, Modal } from "antd";
import { useState } from "react";


export const DeleteUser = ({user}) => {
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
            <Button type="primary" danger onClick={showModal}>
                Delete
            </Button>

            <Modal title="Delete" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Are you sure to delete?</p>
            </Modal>
        </>
    )
}