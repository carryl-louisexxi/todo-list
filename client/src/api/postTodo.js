import axios from 'axios'

export const postTodo = async (text) => {
    try {
        const {data} = await axios.post('/api/post', text)
        return data
        
    } catch (error) {
        if(error.response?.data) {
            return error.response.data
        }
        return { error: error.message || error}
    }
}