import {
  Image,
  StyleSheet, Text, TouchableOpacity,
  View,
} from "react-native";

import { sameSize, textShadow, windowWidth } from "../../Tools/Functions";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import * as React from "react";
import Svg, { Circle } from "react-native-svg";

import source_a from '../../../resources/images/temporary/main-slider-1.jpg';
import source_b from '../../../resources/images/temporary/main-slider-2.jpg';
import source_c from '../../../resources/images/temporary/main-slider-3.jpg';
import LinearGradient from "react-native-linear-gradient";





export default ( ) =>  {

  const [activeSlide ,setActiveSlide]  = useState(0);

  const items = [
    {
      id:1,
      title:'تونیک زنانه السانا مدل دلبر ',
      off:'۵',
      cover:source_b
    },
    {
      id:2,
      title:'مانتو زنانه السانا مدل ماهسین',
      off:'۲۰',
      cover:source_a
    },    {
      id:3,
      title:'مانتو زنانه آرپو مدل پرنسس',
      off:'۳۵',
      cover:source_c
    },
  ];


  return (
    <View style={Styles.root}>
      <GestureHandlerRootView>
        <Carousel
          style={Styles.carousel}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          width={(windowWidth ) }
          data={items}
          autoPlay={false}
          onSnapToItem={(index) => setActiveSlide(index)}
          scrollAnimationDuration={1000}
          renderItem={( { index } ) => (
            <View style={Styles.carouselView} >
              <View style={Styles.carouselItem}>
                <LinearGradient style={Styles.carouselItem} colors={['#2c2c2c' ,'#262626' ,'#212121' ,'#1b1b1b' ,'#161616' ]}>
                  <Image style={Styles.carouselImage} source={items[index]?.cover} />
                </LinearGradient>
              </View>
            </View>
          )}
        />
        <View style={Styles.carouselDetails}>
          <View style={Styles.carouselDetailsTop}>
            <Text style={Styles.carouselOff}>%{items[activeSlide]?.off }</Text>
            <Text style={Styles.carouselTitle}>{items[activeSlide]?.title } </Text>
            <LinearGradient style={Styles.carouselButtonGradiant} colors={[  '#455cc7', '#5c70d5', '#7284e3', '#8799f1','#9daeff' ]}>
              <TouchableOpacity >
                <Text style={Styles.carouselText}>خریدن</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={Styles.dotsView}>
            <Svg width={100} height={40} viewBox="0 0 140 200" >
              { items.map( (item ,key) =>(
                <Circle key={key} fill={key === activeSlide ? '#455CC7' :'#fff'}  cx={ (key+1)*90} cy={30} r={30} />
              ))}
            </Svg>
          </View>
        </View>
      </GestureHandlerRootView>
    </View>
  );
}



const Styles = StyleSheet.create({
  root: {
    height:sameSize(280),
  },
  carousel:{
    marginTop:sameSize(28)
  },
  carouselView:{
    height:sameSize(230),
    paddingHorizontal:sameSize(20),

  },
  carouselItem:{
    borderRadius:sameSize(12),
    width:'100%',
    height:'100%',
    overflow:'hidden',
    alignItems:'flex-end',
    backgroundColor:'#000',
  },
  carouselDetails:{
    marginTop:sameSize(28),
    justifyContent:'space-between',
    right:sameSize(20),
    position:'absolute',
    height:sameSize(230),
    borderRadius:sameSize(12),
    paddingRight:sameSize(15),
    alignItems:'flex-end',
  },
  carouselDetailsTop:{
    alignSelf:'flex-end',
    justifyContent:'space-between',
    alignItems:'flex-end',
  },
  carouselImage:{
    flex:1,
    width:'100%',
    opacity:0.75,
  },
  dotsView:{
    height:sameSize(20),
  },
  carouselOff:{
    fontSize:27,
    fontFamily:'AzarMehr-Bold',
    color:'#9DAEFF',
    paddingTop:sameSize(10)
  },
  carouselTitle:{
    fontSize:15,
    lineHeight:sameSize(24),
    fontFamily:'AzarMehr-Medium',
    color:'#fff',
    paddingTop:sameSize(10),
    width:sameSize(100),
    ...textShadow(),
  },
  carouselButtonGradiant:{
    paddingHorizontal:sameSize(20),
    paddingVertical:sameSize(5),
    borderRadius:sameSize(12),
    marginTop:sameSize(15)
  },
  carouselText:{
    fontSize:13,
    fontFamily:'AzarMehr-Medium',
    color:'#fff',
  }
});

