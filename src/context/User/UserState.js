import React,{ useReducer  } from "react";

import UserReducer from './UserReducer';
import UserContext from "./UserContext";
import axios from 'axios';

import { GET_PROFILE, GET_USERS } from "../types";


const UserState = (props) =>{

    const initialState = {
        users:[],
        userSelected:null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async ()=>{
        const res = await axios.get('https://reqres.in/api/users?page=2');
        console.log(res.data.data);
        dispatch({type:GET_USERS,payload:res.data.data});
    }

    const getProfile = async (id)=>{
        const res = await axios.get('https://reqres.in/api/users/'+id);
        dispatch({type:GET_PROFILE,payload:res.data.data});
    }

    return (
        <UserContext.Provider
            value={{
                users:state.users,
                userSelected:state.userSelected,
                getUsers,
                getProfile
            }}>
                {props.children}
        </UserContext.Provider>
    )
}

export default UserState;