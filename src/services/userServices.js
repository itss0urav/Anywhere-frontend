import { callApi } from "./callApi"

export class Userservices{

    async getUserInfo(){
        const response = await callApi({
            method:"get",
            relativePath:"/userData"
        })

        return response?.data
    }
}



export const useUserServices = () => new Userservices()