import {
  SafeAreaView,
  ScrollView,
  StatusBar, View ,Text,
} from "react-native";


import { useSelector } from "react-redux";
import { colorSchemaSlice } from "./States/colorSchemaSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./Pages/Registration/SignIn";
import Registration from "./Pages/Registration/Registration";
import SignUp from "./Pages/Registration/SignUp";
import Verification from "./Pages/Registration/Verification";
import Home from "./Pages/Home";
import Introduction from "./Pages/Introduction";
import SplashScreen from './Pages/SplashScreen'



export default  () => {
  const colorSchema = useSelector( colorSchemaSlice );
  const Stack = createNativeStackNavigator();
  const Options = {  headerShown:false }


  return (
    <SafeAreaView style={{ flex:1, backgroundColor:colorSchema.backgroundColor }}>
      <StatusBar
        barStyle={colorSchema.barColor}
        backgroundColor={colorSchema.barBackgroundColor}
      />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen options={Options} name="Redirector" component={SplashScreen} />
              <Stack.Screen options={Options} name="Registration" component={Registration} />
              <Stack.Screen options={Options} name="SignIn" component={SignIn} />
              <Stack.Screen options={Options} name="SignUp" component={SignUp} />
              <Stack.Screen options={Options} name="Verification" component={Verification} />
              <Stack.Screen options={Options} name="Introduction" component={Introduction} />
              <Stack.Screen options={Options} name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </ScrollView>
    </SafeAreaView>
  );
}









