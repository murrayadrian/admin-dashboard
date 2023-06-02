import api from 'api/config'

export const userStore = {
    
    state: {
        users: [],
    },
    reducers: {
        setUsers(state, users) {
            return {
                ...state, users
            }
        },
    },
    effects :() => ({
        async getUsers() {
            const response = await api.get("/users")
            this.setUsers(response.data)
        },
        async addUser(user) {
            const res = await api.get("/users");
            const users = await res.data;
            const length =  users.length;
            const id = length ? users[length - 1].id + 1 : 1;
            const newUser = {id, name: user.name, userName: user.userName, passWord: user.passWord};
            await api.post("/users",newUser);
        }
    })
}