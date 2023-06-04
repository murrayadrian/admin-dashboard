import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UpdateUser = ({user}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch().userStore;
    
    const updatedUser = useSelector((state) => state.userStore.user);

    const showModal = async () => {
        await dispatch.setUser(user)
        setIsModalOpen(true);
    };
    const handleOk = async() => {
        setIsModalOpen(false);
        await dispatch.updateUser(updatedUser);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleChange = (e) => {
        dispatch.setUser({...updatedUser, [e.target.name] : e.target.value})
    }
    return (
        <>
            <Button style={updateBtn} type="primary" onClick={showModal}>
                Update
            </Button>

            <Modal title="Update" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input name="name" value={updatedUser.name} onChange={handleChange} placeholder="Enter your name"/>
                <Input name="userName" value={updatedUser.userName} onChange={handleChange} placeholder="Enter your username"/>
                <Input.Password name="passWord" value={updatedUser.passWord} onChange={handleChange} placeholder="input password"/>
            </Modal>
        </>
    )
}
const updateBtn = {
    color: "rgba(0, 0, 0, 0.88)",
    backgroundColor: "green",
  }