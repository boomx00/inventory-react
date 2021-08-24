import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [
            {id:1,username:"popoman",password:"admin"},
            {id:2,username:"admin",password:"admin"}
        ],
        isLogged: true
    },
    reducers: {
        
        getUser:(state,action)=>{
            state.user={

            }
            state.isLogged=true
        },
        AuthenticateUser:(state,action)=>{
            // const history = useHistory();
            state.isLogged=true
        },
        addUser:(state,action)=>{
            // console.log(action.payload)
            const length = state.users.length + 1;
            const data = {...action.payload,id:length}
            state.users = [data,...state.users]
        },
        editUser:(state,action)=>{
            console.log(action.payload)
            const index = state.users.findIndex(users=>users.id = action.payload.id)
            const newArray = [...state.users]
            newArray[index].username= action.payload.username
            newArray[index].password= action.payload.password
            state.users=newArray
        }
       
    }
})

export const { getUser,
               addUser,
               editUser,
            AuthenticateUser} = authSlice.actions

export default authSlice.reducer

export const addUserAction = (data)=>{
    return async dispatch =>{
        try{
            dispatch(addUser(data))
            // const res = await axios.post()
        }catch(err){

        }
    }
}

export const editUserAction = (data)=>{
    return async dispatch=>{
        try{
            // console.log(data)
            dispatch(editUser(data))
            // const data={
            //     email:email,
            //     password:password
            // }
            // const res = await axios.post("user/login-local",data);

            // console.log(res.data)
        }catch(err){
throw(err);
        }
    }
}

export const loginUser = (data)=>{
    return async (dispatch,getState)=>{
        try{
            const { auth } = getState();
            let index = 0 ;
            for (let i = 0; i < auth.users.length; i++) {
                if(data.username == auth.users[i].username){
                    if(data.password == auth.users[i].password){
                        console.log('access')
                        // const history = useHistory();

                        // history.push('/dashboard/inventory')

                        dispatch(AuthenticateUser())
                        // console.log('as')
                    }else{
                        console.log('wrong password')
                    }
                    break;
                }
            }
        }catch(err){

        }
    }
}

