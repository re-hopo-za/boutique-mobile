import {
  StatusBar, View,
} from "react-native";


import { useSelector } from "react-redux";
import { colorSchemaSlice } from "./States/colorSchemaSlice";
import { NavigationContainer } from "@react-navigation/native";
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
import { createDrawerNavigator } from "@react-navigation/drawer";
import Fave from "./Screens/Fave";
import CustomDrawer from "./Layouts/Drawer";
import Profile from "./Screens/Profile";




export default  () => {
  const colorSchema = useSelector( colorSchemaSlice );
  const Drawer  = createDrawerNavigator();
  const Options = {  headerShown:false }


  return (
    <View style={{ flex:1, backgroundColor:colorSchema.backgroundColor }}>
      <StatusBar
        barStyle={colorSchema.barColor}
        backgroundColor={colorSchema.barBackgroundColor}
      />
        <NavigationContainer>
          <Drawer.Navigator screenOptions={Options} drawerContent={ props => <CustomDrawer {...props} />} >
            <Drawer.Screen name="Redirector" component={SplashScreen} />
            <Drawer.Screen name="Registration" component={Registration} />
            <Drawer.Screen name="SignUp" component={SignUp} />
            <Drawer.Screen name="SignIn" component={SignIn} />
            <Drawer.Screen name="Verification" component={Verification} />
            <Drawer.Screen name="Introduction" component={Introduction} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Shop" component={Shop} />
            <Drawer.Screen name="SingleProduct" component={SingleProduct} />
            <Drawer.Screen name="Cart" component={Cart} />
            <Drawer.Screen name="Fave" component={Fave} />
            <Drawer.Screen name="Profile" component={Profile} />
          </Drawer.Navigator>
        </NavigationContainer>
    </View>
  );
}











