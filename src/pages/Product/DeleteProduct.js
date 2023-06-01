import api from 'api/config'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DeleteProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        const remove = async()=>{
            await api.delete(`/products/${id}`);
            navigate("/products/show")
        }
        remove()
    },[])
  return (
    <div>DeleteProduct</div>
  )
}
