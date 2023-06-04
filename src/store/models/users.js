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
        },
        updateUsersState(state, user) {
            const users = [...state.users]
            users.splice((user.id - 1), 1, user);
            return {
               ...state, users
            }
        },
        updateUserRole(state, user) {
            const users = [...state.users]
            const updateUser = users.find((item) => item.id === user.id)
            updateUser.role = user.role;
            return {
                ...state, users
            }
        },
        removeUser(state, id) {
            const users = [...state.users]
            users.splice((id - 1), 1)
            return {
                ...state, users
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
            await this.updateUsersState(user);
        },
        async deleteUser(id) {
            await api.delete(`/users/${id}`);
            await this.removeUser(id);
        },
        async assignAdmin(user) {
            await api.put(`/users/${user.id}`, user);
            await this.updateUserRole(user);
        }
    })
}