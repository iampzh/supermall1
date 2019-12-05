import axios from "axios"
export function request(config){
    const instance1=axios.create({
        baseURL:"http://localhost:8083",
        timeout:5000
    })
    return instance1(config);
}