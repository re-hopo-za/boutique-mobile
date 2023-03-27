import {
  StyleSheet,
  View,
} from "react-native";
import { IconCart, IconMenu } from "../Tools/Icons";
import { sameSize } from "../Tools/Functions";




export default () =>  {



  const Styles = StyleSheet.create({
    root: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:sameSize(20),
      paddingVertical:sameSize(10),
    },
  });


  return (
    <View style={Styles.root}>
      <IconMenu width={sameSize(30)} height={sameSize(30)} />
      <IconCart width={sameSize(30)} height={sameSize(30)} />
    </View>
  );
}



