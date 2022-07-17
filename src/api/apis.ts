import axios from "axios";
import {UserData} from "../Data/data"

export const postData = async (data:UserData) => {
 await axios.post("http://localhost:3001/users", data);
  alert("create account successfully")
};

// feacth data by ID
export const getUserByID = async () =>{
    let res = await axios.get(`http://localhost:3001/users/${2}`)
    let data = res.data
    console.log(data)
}

export const getUserByLogin = async () =>{
    let data = {email:"g@g.com",password:"g023"}
    let res = await axios.get("http://localhost:3001/users")
    let users = res.data
    let user =  users.filter((user:any)=>user.email === data.email && user.password ===data.password)
    return user
}