import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 ;
import { AsyncStoreKeyMap, getObjectValue, storeData, updateObjectData } from "../Tools/AsyncStorage";



const initialState = {
  profile:{
    isLogin:false,
    registrationStatus:true,
    introductionStatus:true,
  },
  status:'idle',
  error:null,
}




export const getUserProfile = createAsyncThunk(
  "profile/getUserProfile",
  async (userData, { rejectWithValue }) => {

    try {
      let profile = await getObjectValue(AsyncStoreKeyMap.appSettings).then(r => r)
      if ( profile === null || typeof profile !== 'object' ) {
        await storeData(AsyncStoreKeyMap.appSettings ,initialState.profile).then(r => r );
        profile = initialState.profile
      }
      return profile;
    } catch(e) {
      return rejectWithValue( e );
    }
})



export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async ( data ,{ rejectWithValue } ) => {

    try {
      let profile = await getObjectValue(AsyncStoreKeyMap.appSettings).then(r => r)

      if ( !profile && profile["isLogin"] === undefined  ) {
        profile = initialState.profile
      }
      const { key, value } = data;
      profile[key] = value;
      await storeData(AsyncStoreKeyMap.appSettings ,profile ).then(r =>r => r )
      return profile
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
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.profile = action.payload;
      })


  }
})

export default profileSlice.reducer;

