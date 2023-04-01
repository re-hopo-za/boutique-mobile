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
import Svg, { Circle, Line } from "react-native-svg";



export default ({items}) =>  {
  const [activeSlide ,setActiveSlide]  = useState(0);
  console.log(activeSlide);
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
          onSnapToItem={(index) => setActiveSlide(index)}
          scrollAnimationDuration={1000}
          windowSize={10}
          renderItem={( { index } ) => (
            <View >
              <Image
                style={Styles.carouselView}
                source={items[index]}
              />
            </View>
          )}
        />
        <View style={Styles.carouselDetails}>
          <Svg width={120} height={13} viewBox="0 0 300 50" >
            { items.map( (item ,key) =>(
              key === activeSlide ?
                <Circle key={key} fill='#455CC7' cx={(key+1)*67} cy={23} r={23} />
              :
                <Circle key={key} fill='#C2C4CA' cx={(key+1)*67} cy={23} r={23} />
            ))}
          </Svg>
        </View>
      </GestureHandlerRootView>
    </View>

  );
}



const Styles = StyleSheet.create({
  root: {
    height:sameSize(350),
  },
  carousel:{
    height:sameSize(330),
  },
  carouselView:{
    paddingHorizontal:sameSize(20),
  },
  carouselItem:{
    borderRadius:sameSize(12),
    width:'100%',
    height:'100%',
    overflow:'hidden',
    alignItems:'flex-end',
  },
  carouselDetails:{
    justifyContent:'flex-end',
    right:sameSize(0),
    position:'absolute',
    alignItems:'center',
    bottom:sameSize(-4),
    width:'100%',
  },

});

