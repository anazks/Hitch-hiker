import Axios from 'axios';
const instance = Axios.create({
     baseURL:'https://hitch-hiker.onrender.com/'
    //  baseURL:'http://localhost:4000/'
})
export default  instance;