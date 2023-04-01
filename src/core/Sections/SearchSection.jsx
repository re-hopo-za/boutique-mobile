import {
  StyleSheet, TextInput, TouchableOpacity,
  View,
} from "react-native";
import { IconSearch } from "../Tools/Icons";
import { sameSize } from "../Tools/Functions";
import { useState } from "react";




export default () =>  {

  const [keywords ,setKeywords] = useState( '' );

  const handleSearch = () => {
    console.log(keywords);
  }


  return (
    <View style={Styles.root}>
      <View style={Styles.searchView}>
        <TouchableOpacity onPress={handleSearch}>
          <IconSearch width={sameSize(20)} height={sameSize(20)} />
        </TouchableOpacity>
        <TextInput style={Styles.searchInput} placeholder='جستجو...' onChangeText={(val) => setKeywords( val ) }/>
      </View>
    </View>
  );
}





const Styles = StyleSheet.create({
  root: {
    paddingHorizontal:sameSize(20),
    paddingTop:sameSize(10),
  },
  searchView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:sameSize(50),
    borderRadius:sameSize(12),
    backgroundColor:'#FFF',
    paddingLeft:sameSize(12),
    shadowColor: "#0004",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
    elevation: 19,
  },
  searchInput:{
    textAlign:'right',
    paddingRight:sameSize(15),
    fontSize:17,
    fontFamily:'AzarMehr-Regular',
    height:'100%',
    flex:1
  }

});
