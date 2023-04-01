import {
  StyleSheet,
  View,
  Text, Image, ImageBackground, TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import sampleProfile from '../../resources/images/temporary/sampleProfile.png';
import profileTexture from '../../resources/images/backgrounds/profileTexture.png';
import { heightScale, sameSize, windowHeight } from "../Tools/Functions";
import { IconDrawerLogout, IconDrawerSettings, IconDrawerShare } from "../Tools/Icons";


// <DrawerContentScrollView  {...props} >
export default (props) =>  {

  return (
    <View style={Styles.root}>
      <View>
        <ImageBackground imageStyle={Styles.profileBackgroundView} style={Styles.profileView} source={profileTexture}>
          <Image style={Styles.profileImage} source={sampleProfile} />
          <Text style={Styles.profileName}>رضا حسین پور</Text>
          <Text style={Styles.profileEmail}>re.hopo.za@gmail.com</Text>
        </ImageBackground>

        <View style={Styles.middleView}>
          <TouchableOpacity style={Styles.linkBox}>
            <IconDrawerSettings width={30} height={30} />
            <Text style={Styles.linkText}>تنظیمات</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={Styles.bottomView}>
        <TouchableOpacity style={Styles.linkBox}>
          <IconDrawerShare width={30} height={30} />
          <Text style={Styles.linkText}>معرفی برنامه به دیگران</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.linkBox}>
          <IconDrawerLogout width={30} height={30} />
          <Text style={Styles.linkText}>خروج از حساب کاربری</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}





const Styles = StyleSheet.create({
  root:{
    justifyContent:'space-between',
    height:'100%'
  },
  profileView:{
    height:sameSize(200),
    justifyContent:'center',
    alignItems:'center'
  },
  profileBackgroundView:{
    resizeMode:'cover'
  },
  profileImage:{
    width:sameSize(80),
    height:sameSize(80),
    alignSelf:'center',
    borderRadius:sameSize(80)
  },
  profileName:{
    fontSize:18,
    fontFamily:'AzarMehr-Medium',
    color:'#fff',
    textAlign:'center',
  },
  profileEmail:{
    fontSize:14,
    fontFamily:'AzarMehr-Regular',
    color:'#C6C6C6',
    textAlign:'center',
  },
  bottomView:{
    borderTopWidth:1,
    borderColor:'#eee',
    height:sameSize(130),
    alignItems:'center',
    justifyContent:'center',
    gap:sameSize(15),
    paddingHorizontal:sameSize(20)
  },
  linkBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
  },
  linkText:{
    fontSize:15,
    fontFamily:'AzarMehr-Regular',
    color:'#333',
    textAlign:'center',
  },
  middleView:{
    height:sameSize(70),
    alignItems:'center',
    alignSelf:'flex-start',
    justifyContent:'center',
    gap:sameSize(15),
    paddingHorizontal:sameSize(20)
  },

});
