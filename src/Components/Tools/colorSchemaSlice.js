import {createSlice} from "@reduxjs/toolkit";
import {useColorScheme} from "react-native";

const lightSchema = {
  backgroundColor: "white",
  color: "#212121",
  barColor:'dark-content',
  barBackgroundColor:"white",
}

const darkSchema  = {
  backgroundColor: "#101010",
  color: "white",
  barColor:'light-content',
  barBackgroundColor:"#101010",
}



const schemaSlice = createSlice({
  name:'colorSchema',
  initialState: ( useColorScheme() === 'dark' ? darkSchema :lightSchema),
  reducers:{
    changeSchema:(state ,action) => {
      const { darkTheme } = action.payload;
      if( darkTheme ){
        return darkSchema;
      }else{
        return lightSchema;
      }
    }
  }
});

export const colorSchemaSlice = (state) => state.colorSchema;
export const {changeSchema} = schemaSlice.actions;
export default schemaSlice.reducer;

// export default () => {
//   const colorScheme = useColorScheme()
//   return Colors[colorScheme] ?? Colors['light'];
// }

