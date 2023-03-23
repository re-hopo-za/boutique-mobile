import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet, Text,
} from "react-native";
import Home from "./Pages/Home";

import { useSelector } from "react-redux";
import { colorSchemaSlice } from "./Tools/colorSchemaSlice.js";
import SplashScreen from "react-native-splash-screen";
import Registration from "./Pages/Registration/Registration";
import SignUp from "./Pages/Registration/SignUp";


export default  () => {

  useEffect(()=>{
    SplashScreen.hide();
  } ,[])

  const colorSchema = useSelector( colorSchemaSlice );

  const styles = StyleSheet.create({
    safeView:{
      flex:1,
      backgroundColor:colorSchema.backgroundColor
    },
    scrollView:{
      flex:1,
    }
  });


  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle={colorSchema.barColor}
        backgroundColor={colorSchema.barBackgroundColor}
      />
      <SignUp/>
    </SafeAreaView>
  );
}




