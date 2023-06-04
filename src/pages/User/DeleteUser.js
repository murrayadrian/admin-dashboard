import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";


export const DeleteUser = ({id}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch().userStore;
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        handleDelete();
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleDelete = async () => {
        await dispatch.deleteUser(id)
    }
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