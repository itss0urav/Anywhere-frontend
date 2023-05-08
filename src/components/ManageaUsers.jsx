import { useEffect, useState } from "react"
import { callApi } from "../services/callApi"

const ManageUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers(){
            const response = await callApi({
                relativePath:"/user",
                method:"get"
            })
            response && setUsers(response.data)
        }
        getUsers()
    }, [])
  return (

    <div style={{padding:"20px 10px"}}>
        <div style={{color:"white", display:"flex", flexDirection:"column", gap:10}}>
         {
            users.map((user) => {
                return (
                    <div style={{border:"1px solid #555", padding:"10px 8px", borderRadius:"5px"}}>
                        <p>username : {user.username}</p>
                        <p>Email : {user.email}</p>   
                    </div>
                )
            })
         }
        </div>
    </div>
  )
}

export default ManageUsers