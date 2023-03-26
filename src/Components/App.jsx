
import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text
} from "react-native";


import { useSelector } from "react-redux";
import { colorSchemaSlice } from "./Tools/colorSchemaSlice.js";
import SplashScreen from "react-native-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "./Pages/Registration/SignIn";
import Registration from "./Pages/Registration/Registration";
import SignUp from "./Pages/Registration/SignUp";
import Verification from "./Pages/Registration/Verification";




export default  () => {
  const login = true;
  useEffect(()=>{
    SplashScreen.hide();
  } ,[])

  const colorSchema = useSelector( colorSchemaSlice );

  const styles = StyleSheet.create({
    safeView:{
      flex:1,
      backgroundColor:colorSchema.backgroundColor
    }
  });

  const Stack   = createNativeStackNavigator();
  const Options = {
    headerShown:false,

  }
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeView}>
        <StatusBar
          barStyle={colorSchema.barColor}
          backgroundColor={colorSchema.barBackgroundColor}
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          { login ? (
              <Stack.Navigator>
                <Stack.Screen options={Options} name="Registration" component={Registration} />
                <Stack.Screen options={Options} name="SignIn" component={SignIn} />
                <Stack.Screen options={Options} name="SignUp" component={SignUp} />
                <Stack.Screen options={Options} name="Verification" component={Verification} />
              </Stack.Navigator>

          ) : (
            <Text>55</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}



