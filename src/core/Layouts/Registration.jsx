import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from '../../resources/images/backgrounds/registrationBackground.png'
import LinearGradient from "react-native-linear-gradient";
import { IconClose , Logo } from "../Tools/Icons";
import { sameSize } from "../Tools/Functions";

import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../States/profileSlice";


export default ({navigation}) => {
  const dispatch = useDispatch();

  const closeRegistration = () => {
    dispatch(
      updateUserProfile( {key: 'registrationStatus',value:false } )
    );
    navigation.navigate('Introduction')
  }

  return(
    <View style={Styles.root} >
      <LinearGradient
        colors={[ '#FC819D','#FD7996','#FB7790','#F05C7A','#DE4766', '#C03150','#B42948']}
        style={Styles.linearGradient}>
        <ImageBackground resizeMode='contain' style={Styles.background} source={Background} >
          <View style={Styles.logoCon}>
            <View style={Styles.closeView}>
              <TouchableOpacity onPress={closeRegistration}>
                <IconClose width={50} height={50} color='#fff'/>
              </TouchableOpacity>
            </View>
            <Logo color='#fff' width={sameSize(200)} height={sameSize(60) }/>
            <Text style={Styles.slogan}>
              کلی محصول شیک رو ببین
              {'\n'}
              و مناسب خودت رو پیدا کن
            </Text>
          </View>
          <View style={Styles.buttonsCon}>
            <TouchableOpacity style={Styles.signIn} onPress={() => navigation.navigate('SignUp')}>
              <Text style={Styles.signInText}>ثبت‌نام با ایمیل</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.signUp} onPress={() => navigation.navigate('SignIn' )} >
              <Text style={Styles.signUpText}>ورود با ایمیل</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}




const Styles = StyleSheet.create({
  root:{
    flex:1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: sameSize(15),
    paddingRight: sameSize(15),
  },
  background:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between",
    paddingTop:sameSize(30),
    paddingBottom:sameSize(15)
  },
  closeView:{
    alignItems:'flex-end',
    alignSelf:'flex-end',
    width:sameSize(30),
    height:sameSize(30)
  },
  logoCon:{
    justifyContent:'center',
    alignItems:'center'
  },
  slogan:{
    fontSize:17,
    fontFamily:'AzarMehr-Regular',
    color:'#fff',
    paddingTop:sameSize(10)
  },
  buttonsCon:{
    height:sameSize(200),
    paddingRight:sameSize(20),
    paddingLeft:sameSize(20),
    justifyContent:'flex-end'
  },
  signIn:{
    backgroundColor:'#fff',
    padding:sameSize(10),
    borderRadius:50
  },
  signInText:{
    color:'#000',
    textAlign:"center",
    fontSize:17,
    fontFamily:'AzarMehr-Medium',
  },
  signUp:{
    borderColor:'#fff',
    borderStyle:'solid',
    borderWidth: sameSize(2),
    padding:sameSize(7),
    borderRadius:50,
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:sameSize(15)
  },
  signUpText:{
    color:'#fff',
    textAlign:"center",
    fontSize:17,
    fontFamily:'AzarMehr-Medium'
  },
  signUpImage:{
    width:sameSize(25),
    height:sameSize(25)
  },

});


