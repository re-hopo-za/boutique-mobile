import {
  StyleSheet,
  View,
} from "react-native";
import { IconBackArrow, IconCart, IconMenu } from "../Tools/Icons";
import { sameSize } from "../Tools/Functions";
import { TouchableOpacity } from "react-native-gesture-handler";



export default ({navigation ,color ='#414442' }) =>  {
  const cart = 0;
  const Styles = StyleSheet.create({
    root: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:sameSize(20),
      paddingBottom:sameSize(10),
      paddingTop:sameSize(30),
    },

  });


  const menu = () => {
    navigation.openDrawer();
  }

  const cartPage = () => {
    navigation.navigate('Cart');
  }

  return (
    <View style={Styles.root}>
      <TouchableOpacity onPress={() => menu() }>
        <IconMenu width={sameSize(24)} height={sameSize(24)} color={color} />
      </TouchableOpacity>
      <TouchableOpacity onPress={cartPage}>
        <IconCart width={sameSize(24)} height={sameSize(24)} count={cart} color={color} />
      </TouchableOpacity>
    </View>
  );
}



