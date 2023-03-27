import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  profile:{
    isLogin:false,
    registrationStatus:true,
    introductionStatus:true,
  },
  status:'idle',
  error:null,
}


const getData = async () => {
  try {
    return AsyncStorage.getItem('@user_profile').then((value) => {
      return JSON.parse(value);
    });
  } catch(e) {
    return null;
  }
}



export const getUserProfile = createAsyncThunk(
  "profile/getProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const jsonValue = AsyncStorage.getItem('@user_profile').then((value) => {
        return JSON.parse(value);
      });
      if ( jsonValue == null ){
        return await AsyncStorage.setItem("@user_profile" ,JSON.stringify(initialState.profile) )
          .then(() => {
              AsyncStorage.getItem("@user_profile")
                .then( (result) => {
                  return JSON.parse(result);
                })
            }
          )
      }
      return jsonValue;
    } catch(e) {
      return rejectWithValue( e );
    }
})


export const updateUserProfile = createAsyncThunk(
  'profile/updateProfile',
  async ( data  ,{ rejectWithValue } ) => {
    try {
      let profile = AsyncStorage.getItem('@user_profile').then((value) => {
        return JSON.parse(value);
      })
      if (profile == null) {
        profile = initialState.profile
      }
      const { key, value } = data;
      profile[key] = value;
      return await AsyncStorage.setItem("@user_profile", JSON.stringify(profile))
        .then(() => {
            AsyncStorage.getItem("@user_profile")
              .then((result) => {
                JSON.parse(result)
              })
          }
        )
    }catch(e) {
      return rejectWithValue( e );
    }
  }
)

export const profileSlice = createSlice({
  name:'profile',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
      // .addCase(getUserProfile.pending, (state, action) => {
      //   state.status = "loading"
      // })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.profile = action.payload;
      })
      // .addCase(getUserProfile.rejected, (state, action) => {
      //   state.status = "failed"
      //   state.error = action.error.message
      // })
  }
})

export default profileSlice.reducer;

