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

import engagement_a from '../../../resources/images/temporary/engagement-1.png';
import engagement_b from '../../../resources/images/temporary/engagement-2.png';
import engagement_c from '../../../resources/images/temporary/engagement-3.png';

import ShowAll from "../../Components/ShowAll";





export default () =>  {


  const items = [
    {
      id:1,
      title:'لباس مجلسی آسنات فرمالیته نامزدی',
      price:225000,
      model:'نامزدی ',
      cover:engagement_a
    },
    {
      id:2,
      title:'اس مجلسی و نامزدی ماکسی',
      price:356000,
      model:'عقد ، نامزدی ، حنابندان',
      cover:engagement_b
    },
    {
      id:3,
      title:'لباس مجلسی هندی',
      price:955000,
      model:'مجلسی ، نامزدی',
      cover:engagement_c
    }
  ];


  return (
    <View style={Styles.root}>
      <ShowAll title='لباس نامزدی زنانه' />
      <GestureHandlerRootView style={{flex:1}}>
        <Carousel
          width={(windowWidth /2.4)}
          vertical={false}
          style={
            { width: windowWidth , ...Styles.carousel }
          }
          loop={true}
          autoPlayInterval={  100 }
          data={items}
          autoPlay={false}
          scrollAnimationDuration={1000}
          renderItem={( { index } ) => (
            <View style={Styles.carouselItem} >
              <Image style={Styles.carouselImage} source={items[index]?.cover} />
              <Text style={Styles.carouseTitle}> {items[index]?.title} </Text>
              <Text style={Styles.carouseCat}> {items[index]?.cats} </Text>
              <Text style={Styles.carousePrice}>
                { numberToPersian( separator( items[index]?.price ) ) } تومان
              </Text>
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
    overflow:'visible',
  },
  carouselItem:{
    height:sameSize(200),
    overflow:'visible',
    marginTop:sameSize(10),
  },
  carouselImage:{
    width:'100%',
    height:sameSize(100)
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

