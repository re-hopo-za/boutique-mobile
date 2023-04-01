import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { heightScale, isNumeric, sameSize } from "../Tools/Functions";
import { IconBackArrow, IconExclamation, IconRegistrationHome } from "../Tools/Icons";
import { useRef, useState } from "react";


export default ({navigation}) => {
  const [inputOne   ,setInputOne]   = useState('');
  const [inputTwo   ,setInputTwo]   = useState('');
  const [inputThree ,setInputThree] = useState('');
  const [inputFour  ,setInputFour]  = useState('');
  const firstInput  = useRef(null);
  const secondInput = useRef(null);
  const thirdInput  = useRef(null);
  const fourthInput = useRef(null);


  const canSubmit = inputOne && inputTwo && inputThree && inputFour;

  const Styles = StyleSheet.create({
    root:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:"space-between"
    },
    headerView:{
      borderColor:'#E6E6E7',
      borderBottomWidth:1,
      borderStyle:'solid',
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:'center',
      height:sameSize(50),
      paddingLeft:sameSize(20),
      paddingRight:sameSize(20)
    },
    helpBox:{
      alignItems:"center",
      paddingTop:sameSize(40),
      paddingBottom:sameSize(20),
    },
    helpBoxTitleText:{
      marginTop:sameSize(20),
      fontFamily:'AzarMehr-Regular',
      fontSize: 28,
      color:'#333',
      textAlign:"center",
    },
    helpBoxHintText:{
      paddingTop:sameSize(1),
      fontFamily:'AzarMehr-Regular',
      fontSize: 15,
      color:'#333',
      textAlign:"center",
    },
    form:{
      paddingRight:sameSize(30),
      paddingLeft:sameSize(30),
      paddingTop:sameSize(20),
    },
    inputsView:{
      flexDirection:'row',
      justifyContent:"space-between"
    },
    textInput:{
      width:sameSize(60),
      fontFamily:'AzarMehr-Regular',
      fontSize: 18,
      paddingLeft:sameSize(10),
      paddingRight:sameSize(10),
      height:sameSize(47),
      color:'#2D2D2F',
      borderRadius:sameSize(7),
      backgroundColor:'#F6F6F6',
      marginTop:sameSize(15),
      textAlign:"center"
    },
    submit:{
      backgroundColor: canSubmit ? '#5e8bff': '#a7bcff',
      height:sameSize(47),
      borderRadius:sameSize(7),
      marginTop:sameSize(20)
    },
    submitText: {
      fontFamily:'AzarMehr-Medium',
      fontSize: 18,
      color:'#fff',
      textAlign:"center",
      verticalAlign:'middle',
      height:'100%',
    },
    errorText:{
      color:'#555',
      lineHeight:22,
      fontFamily:'AzarMehr-Medium',
      marginTop:10
    },
    resetText:{
      color:'#2967FF',
      fontFamily:'AzarMehr-Medium',
      fontSize:16,
      textAlign:"center",
      paddingTop:sameSize(20)
    },


  });


  const handleSubmit = (values) => {
    console.log(values);
  }

  const handleResend = (values) => {
    console.log(values);
  }

  const back = () => {
    navigation.goBack();
  }

  return(
    <View style={Styles.root} >
      <View style={Styles.headerView}>
        <TouchableOpacity onPress={back}>
          <IconBackArrow color='#000' width={heightScale(20)} height={heightScale(20)}/>
        </TouchableOpacity>
        <IconExclamation color='#000' width={heightScale(20)} height={heightScale(20)}/>
      </View>
      <View>
        <View style={Styles.helpBox}>
          <IconRegistrationHome width={50} height={50}/>
          <Text style={Styles.helpBoxTitleText}>
            تایید اکانت
          </Text>
          <Text style={Styles.helpBoxHintText}>
            برای تکمیل ثبت نام
            {'\n'}
            کد تأیید را وارد کنید.
          </Text>
        </View>

        <View style={Styles.form}>
          <View style={Styles.inputsView}>
            <TextInput
              style={Styles.textInput}
              onKeyPress ={(e)=>{
                if(e.nativeEvent.key === "Backspace"){
                  setInputOne('');
                }else if (isNumeric( e.nativeEvent.key )){
                  setInputOne(e.nativeEvent.key );
                  secondInput.current.focus();
                }
              }}
              value={inputOne}
              placeholderTextColor='#333'
              keyboardType='numeric'
              maxLength={1}
              ref={firstInput}
            />
            <TextInput
              style={Styles.textInput}
              value={inputTwo}
              placeholderTextColor='#333'
              keyboardType='numeric'
              maxLength={1}
              ref={secondInput}
              onKeyPress ={(e)=>{
                if(e.nativeEvent.key === "Backspace"){
                  setInputTwo('');
                  if ( !inputTwo ){
                    firstInput.current.focus();
                  }
                }else if (isNumeric( e.nativeEvent.key )){
                  setInputTwo(e.nativeEvent.key );
                  thirdInput.current.focus();
                }
              }}
            />
            <TextInput
              style={Styles.textInput}
              onKeyPress ={(e)=>{
                if(e.nativeEvent.key === "Backspace"){
                  setInputThree('');
                  if ( !inputThree ) {
                    secondInput.current.focus();
                  }
                }else if (isNumeric( e.nativeEvent.key )){
                  setInputThree(e.nativeEvent.key );
                  fourthInput.current.focus();
                }
              }}
              value={inputThree}
              placeholderTextColor='#333'
              keyboardType='numeric'
              maxLength={1}
              ref={thirdInput}
            />
            <TextInput
              style={Styles.textInput}
              onKeyPress ={(e)=>{
                if(e.nativeEvent.key === "Backspace"){
                  setInputFour('');
                  if ( !inputFour ) {
                    thirdInput.current.focus();
                  }
                }else if (isNumeric( e.nativeEvent.key )){
                  setInputFour(e.nativeEvent.key );
                }
              }}
              value={inputFour}
              placeholderTextColor='#333'
              keyboardType='numeric'
              maxLength={1}
              ref={fourthInput}

            />
          </View>

          <TouchableOpacity disabled={!canSubmit} style={Styles.submit} onPress={()=>handleSubmit()}>
            <Text style={Styles.submitText}>ساخت اکانت جدید</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleResend()}>
          <Text style={Styles.resetText}>
            ارسال مجدد کد
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}







