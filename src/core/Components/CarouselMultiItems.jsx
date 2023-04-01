import {
  Button,
  Image, ImageBackground,
  StyleSheet, Text, TouchableOpacity,
  View,
} from "react-native";

import { numberToPersian, sameSize, separator, shadowStyle, windowWidth } from "../Tools/Functions";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import * as React from "react";


import ShowAll from "./ShowAll";





export default ({navigation ,title ,route ,endpoint ,items}) =>  {

  return (
    <View style={Styles.root}>
      <ShowAll navigation={navigation} title={title} route={route} endpoint={endpoint} />
      <GestureHandlerRootView>
        <Carousel
          width={(windowWidth /2.4)}
          style={
            { width: windowWidth , ...Styles.carousel }
          }
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          loop={true}
          data={items}
          pagingEnabled={false}
          scrollAnimationDuration={300}
          customConfig={() => ({ type: "positive", viewCount :3 })}
          renderItem={( { index } ) => (
            <View style={Styles.carouselItem} >
              <View style={Styles.carouselView}>
                <View style={Styles.carouselImageView}>
                  <Image style={Styles.carouselImage} source={items[index]?.cover} />
                </View>
                <Text style={Styles.carouseTitle}> {items[index]?.title} </Text>
                <Text style={Styles.carouseCat}> {items[index]?.model} </Text>
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
    height:sameSize(350),
    paddingHorizontal:sameSize(20),
    marginTop:sameSize(28),
  },
  carousel:{
    marginTop:sameSize(10),
    alignSelf:'flex-end',
    paddingTop:sameSize(15)
  },
  carouselItem:{
    overflow:'hidden',
    marginTop:sameSize(10),
    position:'relative',
    right:sameSize(80)
  },
  carouselView:{
    backgroundColor:'#fff',
    width:'87%',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    paddingBottom:sameSize(5),
    borderRadius:sameSize(12),
    overflow:'hidden',
  },
  carouselImageView:{
    width:'100%',
    height:sameSize(180),
    borderRadius:sameSize(12),
    overflow:'hidden',
    ...shadowStyle()
  },
  carouselImage:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
  },
  carouseTitle:{
    fontSize:13,
    fontFamily:'AzarMehr-Medium',
    color:'#404243',
    marginTop:sameSize(15),
    paddingHorizontal:sameSize(5),
    textAlign:'right',
    height:sameSize(25),
    overflow:'hidden'
  },
  carouseCat:{
    fontSize:11,
    textAlign:'right',
    fontFamily:'AzarMehr-Regular',
    paddingHorizontal:sameSize(7),
    color:'#404243',
  },
  carousePrice:{
    paddingVertical:sameSize(5),
    fontSize:13,
    color:'#455CC7',
    fontFamily:'AzarMehr-Bold',
    alignSelf:'center'
  }
});

