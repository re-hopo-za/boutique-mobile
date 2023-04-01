import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../States/profileSlice";
import React, { useEffect } from "react";
import { Text, View } from "react-native";



export default ({navigation}) => {
  const { profile ,status } = useSelector(state => state.profile );
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserProfile());

    if( status === 'succeeded' ){
      setTimeout( ()=>{
        if ( profile !== null && typeof profile === 'object' ) {
          if (!profile.isLogin && profile.registrationStatus) {
            navigation.navigate('Registration')
          } else if (profile.introductionStatus) {
            navigation.navigate('Introduction')
          } else {
            navigation.navigate('Fave')
          }
        }else{
          navigation.navigate('Fave')
        }
      } , 30)
    }


  } ,[status])



  return (
    <View>
      <Text>
        Splash Screen
      </Text>
    </View>
  )

}
