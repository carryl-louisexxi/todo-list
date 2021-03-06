import axios from 'axios'

export const getTodos =  async () => {

    try {

        const {data} = await axios.get(`/api/get`)

        return data

    }catch (error) {
        
        if(error.response?.data) return error.response.data
    
        return {error: error.message || error}
    }
}