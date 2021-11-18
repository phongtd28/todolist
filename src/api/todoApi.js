import instance from "./instance";

export const getTodosApi = () => {
  const URL = "todoList";
  return instance.get(URL);
};
export const addTodoApi = (todo) => {
  const url = "/todoList";
  return instance.post(url, todo);
};
export const deleteTodoAPI = (id) => {
  const url = `/todoList/${id}`;
  return instance.delete(url);
};
export const updateTodoAPI = (todo) => {
  const url = `/todoList/${todo.id}`;
  return instance.put(url, todo);
};
