
import {
  StyleSheet,
  View,
} from "react-native";
import Header from "../Layouts/Header";
import { sameSize } from "../Tools/Functions";
import Search from "../Sections/Search";
import MainCarousel from "../Sections/MainCarousel";
import Categories from "../Sections/Categories";



export default ({navigation}) =>  {




  const styles = StyleSheet.create({
    root: {
      backgroundColor:'#F6F9FC',
      flex:1,
      paddingTop:sameSize(30)
    },

  });



  return (
    <View style={styles.root}>
      <Header/>
      <Search/>
      <MainCarousel/>
      <Categories />
    </View>
  );
}



