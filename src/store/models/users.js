import api from 'api/config'

export const userStore = {
    
    state: {
        users: [],
        user: {}
    },
    reducers: {
        setUsers(state, users) {
            return {
                ...state, users
            }
        },
        setUser(state, user) {
            return {
                ...state, user
            }
        }
    },
    effects :() => ({
        async getUsers() {
            const response = await api.get("/users")
            this.setUsers(response.data)
        },
        async getUserById(id) {
            const response = await api.get(`/users/${id}`)
            return response.data;
        },
        async addUser({name, userName, passWord}) {
            const res = await api.get("/users");
            const users = await res.data;
            const length =  users.length;
            const id = length ? users[length - 1].id + 1 : 1;
            const newUser = {id, name, userName, passWord, role:"guest"};
            await api.post("/users",newUser);
        },
        async updateUser(user) {
            await api.put(`/users/${user.id}`, user);
            await this.setUser(user);
        },
        async deleteUser(id) {
            await api.delete(`/users/${id}`);
        }
    })
}