import axiosInstance from "../axiosConfig"

export default class ContactsService {
    static async createMessage(email, subject, message){
        const response = await axiosInstance.post('/send-email', 
            {
                email,
                subject,
                message
            }
        )
        return response;
    }
}