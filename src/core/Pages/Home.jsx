
import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Header from "../Sections/Header";
import { sameSize } from "../Tools/Functions";
import Search from "../Sections/Search";
import MainCarousel from "../Sections/Carousels/MainCarousel";
import Categories from "../Sections/Categories";
import CoverOverCarousel from "../Sections/Carousels/CoverOverCarousel";
import Grid from "../Sections/Grid";
import Mesh from "../Sections/Mesh";
import SimpleStackCarousel from "../Sections/Carousels/SimpleStackCarousel";


export default ({navigation}) =>  {


  const styles = StyleSheet.create({
    root: {
      backgroundColor:'#F6F9FC',
      flex:1,
      paddingTop:sameSize(30),

    },

  });



  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={{flexGrow: 1,paddingBottom:sameSize(100)}}>
        <Header/>
        <Search/>
        <MainCarousel/>
        <Categories />
        <CoverOverCarousel />
        <Mesh />
        <Grid/>
        <SimpleStackCarousel/>
      </ScrollView>
    </View>
  );
}



