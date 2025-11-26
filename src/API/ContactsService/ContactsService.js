import axios from "axios"

export default class ContactsService {
    static async createMessage(email, theme, message){
        const response = await axios.post('', 
            {
                email,
                theme,
                message
            }
        )
        return response;
    }
}