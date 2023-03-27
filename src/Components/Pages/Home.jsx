
import {
  StyleSheet,
  View,
} from "react-native";
import Header from "../Layouts/Header";



export default () =>  {




  const styles = StyleSheet.create({
    homePage: {
      marginTop: 32,
      paddingHorizontal: 24,
    },

  });



  return (
    <View style={styles.homePage}>
      <Header/>
    </View>
  );
}



