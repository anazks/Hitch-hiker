import Axios from 'axios';
const instance = Axios.create({
    baseURL:'http://localhost:4000/'
})
export default  instance;