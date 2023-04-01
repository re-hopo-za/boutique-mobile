import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";

import { sameSize } from "../Tools/Functions";


import backgroundShadow from "../../resources/images/backgrounds/shopBannerShadow.png";
import bannerBackground from "../../resources/images/temporary/shopBanner.png";
import Header from "../Layouts/Header";





export default ({navigation ,title ,route ,endpoint}) =>  {


  const item = {
    src : backgroundShadow ,
    title : 'محصولات Nike',
    subTitle : 'ورزشی'
  }

  return (
      <ImageBackground imageStyle={Styles.backgroundImageStyle} style={Styles.backgroundImageView} source={bannerBackground}>
        <Header color='#fff' navigation={navigation}/>
        <ImageBackground  style={Styles.shadowImageView} source={item.src}>
          <View style={Styles.bannerView}>
            <Text style={Styles.bannerTitle}>{item.title}</Text>
            <Text style={Styles.bannerSubTitle}>{item.subTitle}</Text>
          </View>
        </ImageBackground>
      </ImageBackground>

  );
}



const Styles = StyleSheet.create({

  backgroundImageView: {
    paddingTop:sameSize(10),
    width:'100%',
    height:sameSize(280),
    justifyContent:'space-between',
  },
  backgroundImageStyle: {
    resizeMode:'cover',
  },
  shadowImageView:{
    flexWrap:'wrap',
    justifyContent:'flex-end',
    alignSelf:'flex-end',
    alignItems:'flex-end',
    height:sameSize(200),
    paddingTop:sameSize(15),
    width:'100%'
  },
  bannerView:{
    justifyContent:'space-around',
    flexDirection:'column',
    height:sameSize(50),
    marginBottom:sameSize(30),
    paddingRight:sameSize(20),
    alignItems:'flex-end',
    width:'100%',
  },
  bannerTitle:{
    fontFamily:'AzarMehr-Medium',
    fontSize:25,
    color:'#fff',
  },
  bannerSubTitle:{
    paddingTop:sameSize(5),
    fontFamily:'AzarMehr-Regular',
    fontSize:14,
    color:'#fff',
    alignSelf:'flex-end',
  },


});
