import { httpAxios } from "@/utils/httpAxios";

export async function addTask(task){
  const result = await httpAxios.post("/api/tasks",task).then((response)=>response.data);
  return result;
}

export async function showMyTask(userId){
  const result = await httpAxios.get(`/api/users/${userId}/tasks`).then((response)=>response.data);
  return result;
}