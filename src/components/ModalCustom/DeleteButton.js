import { Button, Modal } from "antd";
import { useState } from "react";


export const DeleteButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
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