import { httpAxios } from "@/utils/httpAxios";

export async function addTask(task){
  const result = await httpAxios.post("/api/tasks",task).then((response)=>response.data);
  return result;
}