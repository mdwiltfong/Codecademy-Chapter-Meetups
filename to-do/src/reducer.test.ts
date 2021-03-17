import {initialState, reducer} from "./reducer";



// describe it, expect

describe("reducer",()=>{
    it("returns initial state", ()=>{
        const nextState = reducer(initialState, {type:"reset"})})
        
        
