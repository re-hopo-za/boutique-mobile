
import * as React from 'react';
import {
  Dimensions, Image, Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { sameSize, windowWidth } from "../Tools/Functions";
import {  useState } from "react";
import Svg, { Circle, Path } from "react-native-svg";
import yellow from '../../resources/images/temporary/yellow.png'
import orange from '../../resources/images/temporary/orange.png'
import blue from '../../resources/images/temporary/blue.jpg'
import { getUserProfile, updateUserProfile } from "../States/profileSlice";
import { useDispatch, useSelector } from "react-redux";

export default ({navigation}) =>  {

  const dispatch = useDispatch();

  const [activeSlide ,setActiveSlide] = useState(0);

  const items = [
    { name:'za' ,src:yellow },
    { name:'ba' ,src:orange },
    { name:'ta' ,src:blue }
  ];
  const startShop = () => {
    dispatch(
      updateUserProfile( {key: 'introductionStatus' ,value:false } )
    );
    navigation.navigate('Home')
  }

  const { profile ,status } = useSelector(state => state.profile );



  const Styles = StyleSheet.create({
    root: {
      flex:1,
    },
    iconView:{
      paddingTop:sameSize(30),
      paddingHorizontal:sameSize(25),
      position:'absolute',
      top:0,
      width:'100%'
    },
    iconText:{
      textAlign:"center",
      fontFamily:'AzarMehr-Medium',
      fontSize:18,
      color:'#000'
    },
    dotsView:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:sameSize(15)
    },
    startView:{
      position:'absolute',
      bottom:sameSize(10),
      paddingHorizontal:sameSize(30),
      width:'100%',
    },
    startButton:{
      backgroundColor:'#FF5C5A',
      padding:sameSize(9),
      borderRadius:50,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      elevation: 19,
    },
    startText:{
      textAlign:"center",
      fontFamily:'AzarMehr-Medium',
      fontSize:15,
      color:'#fff'
    },
    carouselView:{
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    carouselImage:{
      flex:1,
      width:'100%'
    }
  });

  return (
    <View style={Styles.root}>
      <View style={{ flex: 1,width:'100%' ,backgroundColor:'#888' }}>
        <GestureHandlerRootView>
          <Carousel
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            width={windowWidth}
            data={items}
            autoPlay={false}
            onSnapToItem={(index) => setActiveSlide(index)}
            scrollAnimationDuration={1000}
            renderItem={( { index } ) => (
              <View style={Styles.carouselView} >
                <Image style={Styles.carouselImage} source={items[index].src} />
              </View>
            )}
          />
        </GestureHandlerRootView>
        <View style={Styles.iconView} >
          <Text style={Styles.iconText}>
            جستجوی راحت و یافتن
            {'\n'}
            محصولات دلخواه
          </Text>
          <View style={Styles.dotsView}>
            <Svg height={60} width={60} viewBox="0 0 600 600" >
              { items.map( (item ,key) =>(
                <Circle key={key} fill={key === activeSlide ? '#2A2A2A' :'#fff'}  cx={ (key+1)*150} cy={60} r={60} />
              ))}
            </Svg>
          </View>
        </View>
        <View style={Styles.startView}>
          <Pressable style={Styles.startButton} onPress={startShop}>
            <Text style={Styles.startText}>شروع خرید </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}



