import { State, Action } from "./types";

export const initialState: State ={
    todos: [],
}
export const reducer = {state: State, action:Action }:State => {
 switch (action.type){
     default:
         return state;
 }
};