import client from '../client'

export const postTodo = async (text) => {
    try {
        const {data} = await client.post('/api/post', text)
        return data
        
    } catch (error) {
        if(error.response?.data) {
            return error.response.data
        }
        return { error: error.message || error}
    }
}