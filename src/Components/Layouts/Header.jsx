import {
  StyleSheet,
  View,
} from "react-native";
import { IconCart, IconMenu } from "../Tools/Icons";
import { sameSize } from "../Tools/Functions";




export default () =>  {



  const styles = StyleSheet.create({
    root: {
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:sameSize(15),
    },
  });


  return (
    <View style={styles.root}>
      <IconMenu/>
      <IconCart/>
    </View>
  );
}



