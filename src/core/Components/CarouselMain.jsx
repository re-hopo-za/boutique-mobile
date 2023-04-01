import {
  Image, ImageBackground,
  StyleSheet, Text, TouchableOpacity,
  View,
} from "react-native";

import { sameSize, shadowStyle, textShadow, windowWidth } from "../Tools/Functions";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import * as React from "react";
import Svg, { Circle } from "react-native-svg";

import source_a from '../../resources/images/temporary/main-slider-1.jpg';
import source_b from '../../resources/images/temporary/main-slider-2.jpg';
import source_c from '../../resources/images/temporary/main-slider-3.jpg';
import LinearGradient from "react-native-linear-gradient";





export default ({navigation ,route }) =>  {
  const [activeSlide ,setActiveSlide]  = useState(0);

  const items = [
    {
      id:0,
      title:'تونیک زنانه السانا مدل دلبر ',
      off:'۵',
      cover:source_b
    },
    {
      id:1,
      title:'مانتو زنانه السانا مدل ماهسین',
      off:'۲۰',
      cover:source_a
    },    {
      id:2,
      title:'مانتو زنانه آرپو مدل پرنسس',
      off:'۳۵',
      cover:source_c
    },
  ];


  return (
    <View style={Styles.root}>
      <GestureHandlerRootView style={{flex:1}} >
        <Carousel
          scrollEnabled={false}
          style={Styles.carousel}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          width={windowWidth }
          data={items}
          pagingEnabled={false}
          snapEnabled={true}
          autoPlay={false}
          onSnapToItem={(index) => setActiveSlide(items[index].id)}
          scrollAnimationDuration={1000}
          windowSize={10}
          renderItem={( { index } ) => (
            <View style={Styles.carouselView} >
              <View style={Styles.carouselItem}>
                <ImageBackground style={Styles.carouselItem} imageStyle={Styles.carouselImage}  source={items[index]?.cover}>
                  <View style={Styles.carouselDetailsTop}>
                    <Text style={Styles.carouselOff}>%{items[index]?.off }</Text>
                    <Text style={Styles.carouselTitle}>{items[index]?.title } </Text>
                     <TouchableOpacity style={Styles.carouselButton}>
                      <Text style={Styles.carouselText}>خریدن</Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </View>
          )}
        />
        <View style={Styles.carouselDetails}>
          <Svg width={100} height={40} viewBox="0 0 140 200" >
            { items.map( (item ,key) =>(
              <Circle key={key} fill={key === activeSlide ? '#455CC7' :'#fff'}  cx={ (key+1)*90} cy={30} r={30} />
            ))}
          </Svg>
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
    marginTop:sameSize(20)
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
    justifyContent:'center',
    right:sameSize(20),
    position:'absolute',
    borderRadius:sameSize(12),
    paddingRight:sameSize(15),
    alignItems:'center',
    bottom:sameSize(20),
  },
  carouselDetailsTop:{
    alignSelf:'flex-end',
    justifyContent:'space-between',
    alignItems:'flex-end',
    paddingRight:sameSize(15),
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
    color:'#455CC7',
    paddingTop:sameSize(10),
    ...textShadow('#000')
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
  carouselButton:{
    paddingHorizontal:sameSize(20),
    paddingVertical:sameSize(5),
    borderRadius:sameSize(12),
    marginTop:sameSize(15),
    backgroundColor:'#455CC7'
  },
  carouselText:{
    fontSize:13,
    fontFamily:'AzarMehr-Medium',
    color:'#fff',
  }
});

