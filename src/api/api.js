const Api = {
    apiUrl: 'https://backtodolists.herokuapp.com/todolist',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: (id) => fetch(`${Api.apiUrl}/get-by-id/${id}`),
    fetchPost: (data) => {
        return fetch(`${Api.apiUrl}/add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
    },
    fetchPut: (list, id) => {
        return fetch(`${Api.apiUrl}/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify(list),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
    },
    fetchDelete: (id) => {
        return fetch(`${Api.apiUrl}/delete/${id}`, {
            method: 'DELETE'
        })
    }
}

export default Api;