import Axios from 'axios';
const instance = Axios.create({
    baseURL:'https://hitch-hiker.onrender.com/'
})
export default  instance;
