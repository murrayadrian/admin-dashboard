import api from 'api/config'

export const customerStore = {
    
    state: {
        customers: []
    },
    reducers: {
        setCustomers(state, customers) {
            return {
                ...state, customers
            }
        }
    },
    effects :() => ({
        async getCustomers() {
            const response = await api.get("/customers")
            this.setCustomers(response.data)
        }
    })
}