import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState ={
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""

}

export const LoginUser = createAsyncThunk("user/LoginUser", async(user, thunkAPI)=>{
    try {
        const response = await axios.post('http://localhost:5000/login',{
            email: user.email,
            password: user.password
        })
        return response.data
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg
            return thunkAPI.rejectWithValue(message)
        }
        
    }
})

//pada getm3  perlu menambahkan extra reducer
export const GetMe = createAsyncThunk("user/GetMe", async(_, thunkAPI)=>{
    try {
        const response = await axios.get('http://localhost:5000/me')
        return response.data
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg
            return thunkAPI.rejectWithValue(message)
        }
        
    }
})

//pada logout tidak perlu menambahkan extra reducer
export const LogOut = createAsyncThunk("user/LogOut", async(_, thunkAPI)=>{
          await axios.get('http://localhost:5000/logout')
   
})

//untuk menggunakan createAsyncThunk, maka gunakan extrareducer
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.pending, (state)=>{ //saat pending maka loading true
            state.isLoading = true
        })
        builder.addCase(LoginUser.fulfilled, (state, action)=>{ //jika berhasil atau terisi set loding jadi false lalu succes true
            state.isLoading = false ;
            state.isSuccess = true ;
            state.user = action.payload;    //karna kita punya data di dalam payload yang direturn return response.data createAsynkThunk
        })
        builder.addCase(LoginUser.rejected, (state, action)=>{ //jika ditolak
            state.isLoading = false ;
            state.isError = true ;
            state.message = action.payload; //message diambil lagi dari payload
        })

        //Get User Login
        builder.addCase(GetMe.pending, (state)=>{ //saat pending maka loading true
            state.isLoading = true
        })
        builder.addCase(GetMe.fulfilled, (state, action)=>{ //jika berhasil atau terisi set loding jadi false lalu succes true
            state.isLoading = false ;
            state.isSuccess = true ;
            state.user = action.payload;    //karna kita punya data di dalam payload yang direturn return response.data createAsynkThunk
        })
        builder.addCase(GetMe.rejected, (state, action)=>{ //jika ditolak
            state.isLoading = false ;
            state.isError = true ;
            state.message = action.payload; //message diambil lagi dari payload
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer