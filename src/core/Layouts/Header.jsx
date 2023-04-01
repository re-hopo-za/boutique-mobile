import {
  StyleSheet,
  View,
} from "react-native";
import { IconBackArrow, IconCart, IconMenu } from "../Tools/Icons";
import { sameSize } from "../Tools/Functions";
import { TouchableOpacity } from "react-native-gesture-handler";



export default ({navigation  ,page ='Home' }) =>  {
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

  const back = () => {
    navigation.back();
  }

  const menu = () => {
    navigation.navigate('');
  }

  const cartPage = () => {
    navigation.navigate('Cart');
  }

  return (
    <View style={Styles.root}>
      {
        page === 'Home' ?
          <>
            <TouchableOpacity onPress={menu}>
              <IconMenu width={sameSize(24)} height={sameSize(24)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={cartPage}>
              <IconCart width={sameSize(24)} height={sameSize(24)} count={cart} />
            </TouchableOpacity>
          </>
        : page === 'Shop' ?
          <>
            <TouchableOpacity onPress={back}>
              <IconBackArrow width={sameSize(24)} height={sameSize(24)} color='#fff' />
            </TouchableOpacity>
            <TouchableOpacity onPress={cartPage}>
               <IconCart width={sameSize(24)} height={sameSize(24)} count={cart} color='#fff' />
            </TouchableOpacity>
          </>
        : page === 'ProductSingle' ?
          <>
            <TouchableOpacity onPress={back}>
              <IconBackArrow width={sameSize(24)} height={sameSize(24)} color='#000' />
            </TouchableOpacity>
            <TouchableOpacity onPress={cartPage}>
              <IconCart width={sameSize(24)} height={sameSize(24)} count={cart} color='#000' />
            </TouchableOpacity>
          </>
        : page === 'Cart' ?
          <>
            <TouchableOpacity onPress={back}>
              <IconBackArrow width={sameSize(24)} height={sameSize(24)} color='#000' />
            </TouchableOpacity>
            <TouchableOpacity onPress={cartPage}>
              <IconCart width={sameSize(24)} height={sameSize(24)} count={cart} color='#000' />
            </TouchableOpacity>
          </>
          : ''
      }
    </View>
  );
}



