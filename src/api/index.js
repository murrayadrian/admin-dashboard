export const getUsers = () => {
    return fetch('https://dummyjson.com/users').then(res => res.json())
}

export const getProducts = () => {
    return fetch('https://dummyjson.com/products').then(res => res.json())
}