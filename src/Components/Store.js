

import {configureStore} from "@reduxjs/toolkit";
import colorSchemaReducer from './States/colorSchemaSlice';
import profileReducer from './States/profileSlice';

export const store = configureStore({
  reducer:{
    colorSchema : colorSchemaReducer,
    profile : profileReducer,
  }
})
