import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await api.get<Todo[]>("/todos");

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};
