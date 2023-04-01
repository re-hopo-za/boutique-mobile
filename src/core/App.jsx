import {
  StatusBar, View,
} from "react-native";


import { useSelector } from "react-redux";
import { colorSchemaSlice } from "./States/colorSchemaSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./Layouts/SignIn";
import SignUp from "./Layouts/SignUp";
import Registration from "./Layouts/Registration";
import Verification from "./Layouts/Verification";
import Home from "./Screens/Home";
import Introduction from "./Layouts/Introduction";
import SplashScreen from './Layouts/SplashScreen'
import Shop from "./Screens/Shop";
import SingleProduct from "./Screens/SingleProduct";
import Cart from "./Screens/Cart";
import Fave from "./Screens/Fave";




export default  () => {
  const colorSchema = useSelector( colorSchemaSlice );
  const Stack = createNativeStackNavigator();
  const Options = {  headerShown:false }


  return (
    <View style={{ flex:1, backgroundColor:colorSchema.backgroundColor }}>
      <StatusBar
        barStyle={colorSchema.barColor}
        backgroundColor={colorSchema.barBackgroundColor}
      />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={Options} name="Redirector" component={SplashScreen} />
            <Stack.Screen options={Options} name="Registration" component={Registration} />
            <Stack.Screen options={Options} name="SignUp" component={SignUp} />
            <Stack.Screen options={Options} name="SignIn" component={SignIn} />
            <Stack.Screen options={Options} name="Verification" component={Verification} />
            <Stack.Screen options={Options} name="Introduction" component={Introduction} />
            <Stack.Screen options={Options} name="Home" component={Home} />
            <Stack.Screen options={Options} name="Shop" component={Shop} />
            <Stack.Screen options={Options} name="SingleProduct" component={SingleProduct} />
            <Stack.Screen options={Options} name="Cart" component={Cart} />
            <Stack.Screen options={Options} name="Fave" component={Fave} />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}









