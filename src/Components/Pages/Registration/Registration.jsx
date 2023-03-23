import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from '../../../resources/images/backgrounds/registrationBackground.png'
import Login from '../../../resources/images/icons/login.png'
import LogoText from '../../../resources/images/icons/logotext.png'
import LinearGradient from "react-native-linear-gradient";

export default () => {
  const Styles = StyleSheet.create({
    root:{
      flex:1,
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    background:{
      flex:1,
      flexDirection:"column",
      justifyContent:"space-between",
      paddingTop:90,
      paddingBottom:80
    },
    logoCon:{
      justifyContent:'center',
      alignItems:'center'
    },
    slogan:{
      fontSize:20,
      fontFamily:'AzarMehr-Medium',
      color:'#fff',
      lineHeight:30,
      paddingTop:25
    },
    buttonsCon:{
      height:200,
      paddingRight:80,
      paddingLeft:80
    },
    signIn:{
      backgroundColor:'#fff',
      padding:15,
      borderRadius:50

    },
    signInText:{
      color:'#000',
      textAlign:"center",
      fontSize:20,
      fontFamily:'AzarMehr-Light',
    },
    signUp:{
      borderColor:'#fff',
      borderStyle:'solid',
      borderWidth:2,
      padding:10,
      borderRadius:50,
      flexDirection:'row',
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      gap:15,
      paddingRight:70,
      marginTop:15
    },
    signUpText:{
      color:'#fff',
      textAlign:"center",
      fontSize:20,
      fontFamily:'AzarMehr-Light',
      paddingBottom:4
    },
    signUpImage:{
      width:40,
      height:40
    },

  });

  const signUp = () => {

  }

  const signIn = () => {

  }

  return(
    <View style={Styles.root} >
      <LinearGradient
        colors={[ '#FC819D','#FD7996','#FB7790','#F05C7A','#DE4766', '#C03150','#B42948']}
        style={Styles.linearGradient}>
        <ImageBackground resizeMode='contain' style={Styles.background} source={Background} >
          <View style={Styles.logoCon}>
            <Image source={LogoText} />
            <Text style={Styles.slogan}>
              کلی محصول شیک رو ببین
              {'\n'}
              و مناسب خودت رو پیدا کن
            </Text>
          </View>
          <View style={Styles.buttonsCon}>
            <TouchableOpacity style={Styles.signIn} onPress={signIn}>
              <Text style={Styles.signInText}>ثبت‌نام با ایمیل</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.signUp} onPress={signUp} >
              <Image style={Styles.signUpImage} source={Login}/>
              <Text style={Styles.signUpText}>ورود با ایمیل</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}


