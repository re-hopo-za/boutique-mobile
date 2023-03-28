import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../States/profileSlice";
import React, { useEffect } from "react";
import { Text, View } from "react-native";



export default ({navigation}) => {
  const { profile ,status } = useSelector(state => state.profile );
  const dispatch = useDispatch();



  useEffect(()=>{
    dispatch(getUserProfile());

    setTimeout( ()=>{
      if ( status === 'succeeded') {
        if (!profile.isLogin && profile.registrationStatus) {
          navigation.navigate('Registration')
        } else if (profile.introductionStatus) {
          navigation.navigate('Introduction')
        } else {
          navigation.navigate('Home')
        }
      }
    } , 30)

  } ,[status])



  return (
    <View>
      <Text>
        Splash Screen
      </Text>
    </View>
  )

}
