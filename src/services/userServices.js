import { httpAxios } from "@/utils/httpAxios";

export async function addUser(data){
  const result = await httpAxios.post("/api/users",data).then((response)=>response.data);
  return result;
}