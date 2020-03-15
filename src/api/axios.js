import Axios from 'axios'
export default Axios.create({
    baseURL:'http://api.zhinengshe.com/10001-you163',
    headers:{
        apikey:'ff187664e66b42f0b5f7842192808f4f'
    }
})
