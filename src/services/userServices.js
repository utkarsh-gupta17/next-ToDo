import { httpAxios } from "@/utils/httpAxios";

export async function addUser(data){
  const result = await httpAxios.post("/api/users",data).then((response)=>response.data);
  return result;
}

export async function Login(data){
  const result = await httpAxios.post("/api/login",data).then((response)=>response.data);
  return result;
}

export async function currentUser(){
  const result = await httpAxios.get("/api/current").then((response)=>response.data);
  return result;
}

export async function Logout(){
  const result = await httpAxios.post("/api/logout").then((response)=>response.data);
  return result;
}