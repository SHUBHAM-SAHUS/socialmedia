
import axios from "axios";

const baseURL = 'https://socialmediaapi.ibrcloud.com'
const apiService = axios.create({
     baseURL
})
 
export default apiService