
import { Text, TouchableOpacity, View ,StyleSheet} from "react-native";
import { IconArrowLeft } from "../Tools/Icons";
import { sameSize } from "../Tools/Functions";



export default ({title ,url}) => {

  return (
    <View style={Styles.titleView}>
      <View style={Styles.titleIconView}>
        <IconArrowLeft color='#9D9D9D' width={sameSize(25)} height={sameSize(20) }/>
        <Text style={Styles.allCat}> نمایش همه</Text>
      </View>
      <TouchableOpacity>
        <Text style={Styles.titleText}> {title}</Text>
      </TouchableOpacity>
    </View>
    );
}

const Styles = StyleSheet.create({
  titleView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  titleIconView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:{
    fontFamily:'AzarMehr-Bold',
    fontSize:15,
    color:'#404243'
  },
})
