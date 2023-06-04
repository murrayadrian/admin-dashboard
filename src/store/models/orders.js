import api from 'api/config'

export const orderStore = {
    
    state: {
        orders: []
    },
    reducers: {
        setOrders(state, orders) {
            return {
                ...state, orders
            }
        }
    },
    effects :() => ({
        async getOrders() {
            const response = await api.get("/orders")
            this.setOrders(response.data)
        }
    })
}