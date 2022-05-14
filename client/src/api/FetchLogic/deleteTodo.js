import client from '../client'

export const deleteTodo = async (id) => {
    try {
        const {data} = await client.delete(`/api/delete/${id}`)
        return data
        
    } catch (error) {
        if(error.response?.data) {
            return error.response.data
        }
        return { error: error.message || error}
    }
}