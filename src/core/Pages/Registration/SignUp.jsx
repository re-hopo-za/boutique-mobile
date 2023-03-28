import {
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { IconBackArrow, IconExclamation, IconMobile, Logo } from "../../Tools/Icons";
import { Formik } from "formik";
import * as Yup from 'yup';
import { heightScale, sameSize } from "../../Tools/Functions";



export default ({navigation}) => {

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
    logoView:{
      margin:sameSize(30),
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      width:'50%',
      alignSelf:'center'
    },
    elevation: {
      elevation: 20,
      shadowColor: '#52006A',
    },
    form:{
      paddingRight:sameSize(30),
      paddingLeft:sameSize(30),
      paddingTop:sameSize(10),
    },
    textInput:{
      fontFamily:'AzarMehr-Regular',
      fontSize: 18,
      paddingLeft:sameSize(10),
      paddingRight:sameSize(10),
      height:sameSize(47),
      color:'#2D2D2F',
      borderRadius:sameSize(7),
      backgroundColor:'#F6F6F6',
      marginTop:sameSize(15),
    },
    submit:{
      backgroundColor:'#455CC7',
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
    bottomView:{
      padding:sameSize(30),
    },
    loginButton:{
      backgroundColor:'#DCE0F9',
      borderRadius:sameSize(7),
      height:sameSize(47),
    },
    loginText:{
      color:'#000',
      fontFamily:'AzarMehr-Medium',
      textAlign:"center",
      fontSize: 18,
      height:'100%',
      verticalAlign:'middle'
    },
    forgetPassword:{
      color:'#455CC7',
      textAlign:'center',
      marginTop:sameSize(19),
      fontSize:17,
      fontFamily:'AzarMehr-Regular',
    }

  });


  const handleSubmit = (values) => {
    console.log(values);
  }

  const back = () => {
    navigation.goBack();
  }

  const SignIn = () => {
    navigation.navigate('SignIn');
  }



  const SignupSchema = Yup.object().shape({

    email: Yup.string()
      .email('مقداری که برای فیلد "ایمیل" وارد کردهاید نامناسب است.')
      .required(' فیلد "ایمیل" الزامی  میباشد.'),
    password: Yup.string()
      .min(5, 'مقدار فیلد "گذرواژه" کوتاه میباشد.')
      .max(50, 'مقدار فیلد "گذرواژه" خیلی طولانی میباشد.')
      .required(' فیلد "گذرواژه" الزامی  میباشد.'),
  });

  return(
      <View style={Styles.root} >
        <View style={Styles.headerView}>
          <TouchableOpacity onPress={back}>
            <IconBackArrow color='#000' width={heightScale(20)} height={heightScale(20)}/>
          </TouchableOpacity>
          <IconExclamation color='#000' width={heightScale(20)} height={heightScale(20)}/>
        </View>
        <View>
          <View style={[Styles.logoView, Styles.elevation]} >
            <Logo color='#455CC7' width={sameSize(200)} height={sameSize(60) }/>
          </View>
          <Formik
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={SignupSchema}
            initialValues={{ email: '' ,password:'' }}
            onSubmit={values => handleSubmit(values)}
          >
            {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
              <View style={Styles.form}>
                <TextInput
                  style={Styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholderTextColor='#333'
                  placeholder='ایمیل'
                />
                {errors.email ? (
                  <Text  style={Styles.errorText}>{errors.email}</Text>
                ) : null}

                <TextInput
                  style={Styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholderTextColor='#333'
                  placeholder='گذرواژه'
                />
                {errors.password ? (
                  <Text  style={Styles.errorText}>{errors.password}</Text>
                ) : null}

                <TouchableOpacity style={Styles.submit} onPress={()=>handleSubmit()}>
                  <Text style={Styles.submitText}>ورود</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <Text style={Styles.forgetPassword}>
            فراموشی گذرواژه؟
          </Text>
        </View>

        <View style={Styles.bottomView}>
          <Pressable style={Styles.loginButton} onPress={SignIn}>
            <Text style={Styles.loginText}>ثبت نام</Text>
          </Pressable>
        </View>
      </View>
  );
}







