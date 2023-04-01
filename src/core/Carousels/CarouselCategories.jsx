import {
   ImageBackground,
  StyleSheet, Text, TouchableOpacity,
  View,
} from "react-native";

import { sameSize, windowWidth } from "../Tools/Functions";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import * as React from "react";

import engagement_a from '../../resources/images/temporary/engagement-1.png';
import engagement_b from '../../resources/images/temporary/engagement-2.png';
import engagement_c from '../../resources/images/temporary/engagement-3.png';
import categoryShadow from '../../resources/images/backgrounds/categoryShadow.png';

import ShowAll from "../Components/ShowAll";





export default ({navigation ,title ,route ,endpoint ,items }) =>  {





  return (
    <View style={Styles.root}>
      <ShowAll navigation={navigation} title={title} route={route} endpoint={endpoint} />
      <GestureHandlerRootView>
        <Carousel
          width={(windowWidth /1.8)}
          style={
            { width: windowWidth , ...Styles.carousel }
          }
          loop={true}
          data={items}
          pagingEnabled={false}
          scrollAnimationDuration={300}
          customConfig={() => ({ type: "positive", viewCount :2 })}
          renderItem={( { index } ) => (
            <View style={Styles.carouselItem} >
              <ImageBackground style={Styles.backgroundView} imageStyle={Styles.carouselImage} source={items[index]?.cover} >
                <ImageBackground style={Styles.shadowView} imageStyle={Styles.carouselImage} source={categoryShadow} >
                  <Text style={Styles.carouseTitle}>{items[index]?.title} </Text>
                  <Text style={Styles.carouseSubTitle}> {items[index]?.subtitle} </Text>
                </ImageBackground>
              </ImageBackground>
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
    alignSelf:'flex-end'
  },
  carouselItem:{
    overflow:'hidden',
    position:'relative',
    right:sameSize(37),
    padding:sameSize(10)
  },
  backgroundView:{
    height:sameSize(200),
    borderRadius:sameSize(12),
    overflow:'hidden',
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  shadowView:{
    height:sameSize(180),
    borderRadius:sameSize(12),
    overflow:'hidden',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    width:'100%',
    paddingBottom:15
  },
  carouseTitle:{
    fontSize:17,
    width:sameSize(70),
    fontFamily:'AzarMehr-Medium',
    color:'#fff',
    marginTop:sameSize(15),
    textAlign:'right',
    lineHeight:sameSize(22),
    paddingRight:sameSize(15),
  },
  carouseSubTitle:{
    fontSize:11,
    textAlign:'right',
    fontFamily:'AzarMehr-Regular',
    paddingTop:sameSize(5),
    paddingRight:sameSize(15),
    color:'#fff',
  },

});

