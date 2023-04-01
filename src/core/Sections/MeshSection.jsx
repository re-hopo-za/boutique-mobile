import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text, Image,
} from "react-native";
import { sameSize, shadowStyle } from "../Tools/Functions";
import ShowAll from "../Components/ShowAll";




export default ({navigation ,title ,route ,endpoint ,items}) =>  {


  return (
    <View style={Styles.root}>
      <ShowAll navigation={navigation} title={title} route={route} endpoint={endpoint} />
      <View style={Styles.meshView}>
        {items.length && items.map( item => (
          <View style={Styles.meshItem} key={item?.id}>
            <Image style={Styles.meshImage} source={item?.cover} />
            <Text style={Styles.meshTitle} >
              {item?.title}
            </Text>
            <Text style={Styles.meshModel} >
              {item?.model}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}



const Styles = StyleSheet.create({
  root: {
    paddingHorizontal:sameSize(20),
    paddingTop:sameSize(10),
  },
  meshView:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  meshItem:{
    width:'47%',
    backgroundColor:'#fff',
    marginTop:sameSize(17),
    borderRadius:sameSize(20),
    overflow:'hidden',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:sameSize(7),
    ...shadowStyle()
  },
  meshImage:{
    width:'100%',
    resizeMode:'cover',
    height:sameSize(200)
  },
  meshTitle:{
    fontFamily:'AzarMehr-Medium',
    fontSize:13,
    color:'#404243',
    paddingTop:sameSize(7)

  },
  meshModel:{
    fontFamily:'AzarMehr-Medium',
    fontSize:10,
    color:'#ACACAC',
  },
});
