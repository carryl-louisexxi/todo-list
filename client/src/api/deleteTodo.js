import axios from 'axios'

export const deleteTodo = async (id) => {
    try {
        const {data} = await axios.delete(`api/delete/${id}`)
        return data
        
    } catch (error) {
        if(error.response?.data) {
            return error.response.data
        }
        return { error: error.message || error}
    }
}