import {
  StyleSheet, Text, TouchableOpacity,
  View,
} from "react-native";
import { IconActiveMenu, IconCart, IconHeart, IconHome, IconShop, IconUser } from "../Tools/Icons";
import { sameSize, shadowStyle } from "../Tools/Functions";
import { useRoute } from "@react-navigation/native";




export default ({navigation}) =>  {

  const route = useRoute();
  const name = route.name;

  const Redirect = ( page ) => {
    navigation.navigate( page )
  }

  return (
    <View style={Styles.root}>
      <TouchableOpacity style={Styles.buttons} onPress={()=>Redirect('Fave')}>
        <IconActiveMenu color={ name === 'Fave' ? '#455CC7' : '#fff' } width={sameSize(30)} height={sameSize(6)} />
        <View style={Styles.view}>
          <IconHeart color={ name === 'Fave' ? '#455CC7' : '#757575' } width={sameSize(23)} height={sameSize(23)} />
          <Text style={[Styles.text ,{color: name === 'Fave' ? '#455CC7' : '#757575' } ] }>نشانک</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttons} onPress={()=>Redirect('Profile')}>
        <IconActiveMenu color={ name === 'Profile' ? '#455CC7' : '#fff' } width={sameSize(30)} height={sameSize(6)} />
        <View style={Styles.view}>
          <IconUser color={ name === 'Profile' ? '#455CC7' : '#757575' } width={sameSize(23)} height={sameSize(23)} />
          <Text style={[Styles.text ,{color: name === 'Profile' ? '#455CC7' : '#757575' } ] }>پروفایل</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttons} onPress={()=>Redirect('Shop')}>
        <IconActiveMenu color={ name === 'Shop' ? '#455CC7' : '#fff' } width={sameSize(30)} height={sameSize(6)} />
        <View style={Styles.view}>
          <IconShop color={ name === 'Shop' ? '#455CC7' : '#757575' } width={sameSize(23)} height={sameSize(23)} />
          <Text style={[Styles.text ,{color: name === 'Shop' ? '#455CC7' : '#757575' } ] }> فروشگاه</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttons} onPress={()=>Redirect('Home')}>
        <IconActiveMenu color={ name === 'Home' ? '#455CC7' : '#fff' } width={sameSize(30)} height={sameSize(6)} />
        <View style={Styles.view}>
          <IconHome color={ name === 'Home' ? '#455CC7' : '#757575' } width={sameSize(23)} height={sameSize(23)} />
          <Text style={[Styles.text ,{color: name === 'Home' ? '#455CC7' : '#757575' } ] }>خانه</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}





const Styles = StyleSheet.create({
  root: {
    marginTop:sameSize(20),
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:sameSize(40),
    alignItems:'center',
    height:sameSize(75),
    backgroundColor:'#fff',
    alignSelf:'center',
    width:'100%',
    borderTopRightRadius:sameSize(20),
    borderTopLeftRadius:sameSize(20),
  },
  buttons:{
    alignItems:'center',
    justifyContent:'space-between',
    height:sameSize(75),
  },
  view:{
    height:sameSize(63),
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  text:{
    fontSize:13,
    fontFamily:'AzarMehr-Regular',
    color:'#757575',
  }
});
