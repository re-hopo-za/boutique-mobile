import {
  Button,
  Image, ImageBackground,
  StyleSheet, Text, TouchableOpacity,
  View,
} from "react-native";

import { numberToPersian, sameSize, separator, shadowStyle, windowWidth } from "../../Tools/Functions";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import * as React from "react";

import shoes_a from '../../../resources/images/temporary/shoes-1.png';
import shoes_b from '../../../resources/images/temporary/shoes-2.png';
import shoes_c from '../../../resources/images/temporary/shoes-3.png';

import ShowAll from "../../Components/ShowAll";





export default () =>  {


  const items = [
    {
      id:1,
      title:'کفش مخصوص دویدن',
      price:225000,
      cats:['زنانه ورزشی'],
      cover:shoes_a
    },
    {
      id:2,
      title:'کفش پیاده روی سارزی',
      price:356000,
      cats:['زنانه پیاده‌روی'],
      cover:shoes_b
    },
    {
      id:3,
      title:'کفش پیاده روی سارزی',
      price:955000,
      cats:['زنانه مجلسی'],
      cover:shoes_c
    },
    {
      id:4,
      title:'کفش پیاده روی سارزی',
      price:955000,
      cats:['زنانه مجلسی'],
      cover:shoes_c
    },
  ];


  return (
    <View style={Styles.root}>
      <ShowAll title='کفش زنانه' />
      <GestureHandlerRootView style={{flex:1}}>
        <Carousel
          width={(windowWidth /2.4)}
          vertical={false}
          style={
            { width: windowWidth , ...Styles.carousel }
          }
          mod='horizontal-stack'
          loop={true}
          autoplayReverse={true}
          autoPlayInterval={  100 }
          data={items}

          scrollAnimationDuration={1000}
          modeConfig={{
            snapDirection:'right',
            stackInterval:  8  ,
          }}
          customConfig={() => ({ type: "positive", viewCount :3 })}
          renderItem={( { index } ) => (
            <View style={Styles.carouselItem} >
              <Image style={Styles.carouselImage} source={items[index]?.cover} />
              <View style={Styles.carouselView} >
                <Text style={Styles.carouseTitle}> {items[index]?.title} </Text>
                <Text style={Styles.carouseCat}> {items[index]?.cats[0]} </Text>
                <Text style={Styles.carousePrice}>
                  { numberToPersian( separator( items[index]?.price ) ) } تومان
                </Text>
              </View>
            </View>
          )}
        />

      </GestureHandlerRootView>
    </View>
  );
}



const Styles = StyleSheet.create({
  root: {
    height:sameSize(250),
    paddingHorizontal:sameSize(20),
    marginTop:sameSize(28),
  },
  carousel:{
    marginTop:sameSize(10),
    direction:'ltr',
    alignItems:'flex-end',
    alignSelf:'flex-end'
  },
  carouselItem:{
    height:sameSize(200),
    overflow:'visible',
    marginTop:sameSize(10),
    position:'relative',
    right:75
  },
  carouselView:{
    borderRadius:sameSize(12),
    overflow:'visible',
    backgroundColor:'#fff',
    width:'80%',
    height:sameSize(180),
    alignItems:'flex-end',
    justifyContent:'flex-end',
    paddingHorizontal:sameSize(5),
    paddingBottom:sameSize(5),
    ...shadowStyle()
  },

  carouselImage:{
    position:'absolute',
    marginTop:sameSize(-15),
    width:'100%',
    resizeMode:'contain',
    alignSelf:'flex-end',
    zIndex:2
  },
  carouseTitle:{
    fontSize:12,
    fontFamily:'AzarMehr-Medium',
    lineHeight:sameSize(15),
    color:'#404243',
    paddingTop:sameSize(10),
    textAlign:'right'
  },
  carouseCat:{
    fontSize:11,
    textAlign:'right',
    fontFamily:'AzarMehr-Regular',
    color:'#404243',
  },
  carousePrice:{
    paddingTop:sameSize(5),
    fontSize:13,
    color:'#455CC7',
    fontFamily:'AzarMehr-Bold',
    alignSelf:'center'
  }
});

