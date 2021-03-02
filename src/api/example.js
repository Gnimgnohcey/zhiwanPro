import axios from 'axios'
// eslint-disable-next-line no-unused-vars
export const exampleHttpRquest=(params="")=>{
    return axios.request({
       url: 'http://localhost:3000/zhiwanTest',
       method:'GET',
       params:params
   })
}
