import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text, Image, ImageBackground,
} from "react-native";

import { numberToPersian, sameSize, separator, textShadow } from "../Tools/Functions";
import { useState } from "react";
import ShowAll from "../Components/ShowAll";

import shomis_a from "../../resources/images/temporary/shomis-1.png";
import shomis_b from "../../resources/images/temporary/shomis-2.png";
import shomis_c from "../../resources/images/temporary/shomis-3.png";




export default () =>  {
  const [active ,setActive] = useState( 0 );

  const items = [
    {
      id:1,
      title:'شومیز زنانه اچ اند ام',
      model:'مدل 00217',
      price:325600,
      cover:shomis_a
    },
    {
      id:2,
      title:'شومیز زنانه',
      model:'مدل RZ-ARSA82039-SHO.RA-SE',
      price:248000,
      cover:shomis_b
    },
    {
      id:3,
      title:'شومیز زنانه',
      model:'مدل RZ-ARSA82039-SHO.RA-TOO',
      price:744000,
      cover:shomis_c
    },
  ];

  return (
    <View style={Styles.root}>
      <ShowAll title='شومیز زنانه' />
      <View style={Styles.gridItem}>
        <View style={Styles.gridItemLeft}>
          {
            items[1] && (
              <View style={Styles.gridItemLeftView}>
                <ImageBackground imageStyle={{opacity: 0.7}} style={Styles.gridItemImage} source={items[1]?.cover}>
                  <Text style={Styles.gridItemLeftText}>{numberToPersian(separator(items[1]?.price))} تومان </Text>
                </ImageBackground>
              </View>
            )
          }
          {
            items[2] && (
              <View style={Styles.gridItemLeftView}>
                <ImageBackground imageStyle={{opacity: 0.7}} style={Styles.gridItemImage} source={items[2]?.cover}>
                  <Text style={Styles.gridItemLeftText}>{numberToPersian(separator(items[2]?.price))}تومان </Text>
                </ImageBackground>
              </View>
            )
          }
        </View>
        <View style={Styles.gridItemRight}>
          {
            items[0] && (
              <View style={Styles.gridItemRightView}>
                <ImageBackground imageStyle={{opacity: 0.7}} style={Styles.gridItemImage} source={items[0]?.cover}>
                  <Text style={Styles.gridItemRightTextTitle}>{items[0]?.title}</Text>
                  <View style={Styles.gridItemDetailsView}>
                    <Text style={Styles.gridItemLeftTextPrice}>{numberToPersian(separator(items[0]?.price))}</Text>
                    <Text style={Styles.gridItemRightTextModel}>{items[0]?.model}</Text>
                  </View>
                </ImageBackground>
              </View>
            )
          }
        </View>
      </View>
    </View>
  );
}



const Styles = StyleSheet.create({
  root: {
    paddingHorizontal:sameSize(20),
    paddingTop:sameSize(30),
  },
  gridItem:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    height:sameSize(340),
    paddingTop:sameSize(15),
  },
  gridItemLeft:{
    width:'30%',
    justifyContent:'space-between',
    flexDirection:'column',
    alignContent:'space-between',
    height:'100%',
  },
  gridItemRight:{
    width:'65%',
  },
  gridItemLeftView:{
    height:'47.5%',
    backgroundColor:'#000',
    borderRadius:sameSize(12),
    overflow:'hidden',
  },
  gridItemRightView:{
    backgroundColor:'#000',
    borderRadius:sameSize(12),
    overflow:'hidden',
  },
  gridItemImage:{
    height:'100%',
    resizeMode:'cover',
    justifyContent:'flex-end',
    alignItems:'center',
  },

  gridItemLeftText:{
    fontFamily:'AzarMehr-Medium',
    fontSize:14,
    color:'#fff',
    paddingTop:sameSize(7),
    position:'absolute'
  },
  gridItemDetailsView:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:sameSize(15),
    paddingBottom:sameSize(5),
    alignItems:'center',
  },
  gridItemRightTextTitle:{
    fontFamily:'AzarMehr-Medium',
    fontSize:19,
    color:'#fff',
    alignSelf:'flex-end',
    paddingRight:sameSize(15),
  },
  gridItemRightTextModel:{
    fontFamily:'AzarMehr-Regular',
    fontSize:13,
    color:'#fff',
  },
  gridItemLeftTextPrice:{
    fontFamily:'AzarMehr-Bold',
    fontSize:16,
    color:'#fff',
  },


});
