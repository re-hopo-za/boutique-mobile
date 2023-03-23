

import {configureStore} from "@reduxjs/toolkit";
import colorSchemaReducer from './Tools/colorSchemaSlice';

export const store = configureStore({
  reducer:{
    colorSchema : colorSchemaReducer
  }
})
