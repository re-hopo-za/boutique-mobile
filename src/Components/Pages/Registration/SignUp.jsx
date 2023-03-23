import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { IconBackArrow, IconExclamation } from "../../Tools/Icons";
import { Formik } from "formik";
import * as Yup from 'yup';
import Linking from "../../Features/Linking";


export default () => {
  const Styles = StyleSheet.create({
    root:{
      flex:1,
      backgroundColor:'#fff',

    },
    header:{
      borderColor:'#E6E6E7',
      borderBottomWidth:1,
      borderStyle:'solid',
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:'center',
      height:80,
      paddingLeft:40,
      paddingRight:40
    },
    form:{
      paddingRight:70,
      paddingLeft:70,
      paddingTop:60,
    },
    signInText:{
      color:'#2D2D2F',
      fontSize:25,
      fontFamily:'AzarMehr-Medium',
      textAlign:'center'
    },
    textInput:{
      fontFamily:'AzarMehr-Medium',
      fontSize:18,
      padding:25,
      height:90,
      color:'#2D2D2F',
      borderRadius:12,
      backgroundColor:'#F6F6F6',
      marginTop:20
    },
    submit:{
      backgroundColor:'#2967FF',
      padding:16,
      borderRadius:12,
      marginTop:20
    },
    submitText: {
      fontFamily:'AzarMehr-Medium',
      fontSize:20,
      color:'#fff',
      textAlign:"center"
    },
    errorText:{
      color:'#555',
      lineHeight:22,
      fontFamily:'AzarMehr-Medium',
      marginTop:10
    },
    conditionText:{
      color:'#555',
      fontFamily:'AzarMehr-Medium',
      fontSize:18,
      textAlign:"center",
      paddingTop:20
    },
    blueText:{
      color:'#2967FF',
      fontFamily:'AzarMehr-Bold',
    },
    link:{
      color:'#2967FF'
    }

  });



  const handleSubmit = (values) => {
    console.log(values);
  }





  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'مقداری که برای فیلد "نام کامل" وارد کردهاید نامناسب است.')
      .required(' فیلد "نام کامل" الزامی میباشد.'),
    email: Yup.string()
      .email('مقداری که برای فیلد "ایمیل" وارد کردهاید نامناسب است.')
      .required(' فیلد "ایمیل" الزامی  میباشد.'),
    password: Yup.string()
      .min(5, 'مقدار فیلد "گذرواژه" کوتاه میباشد.')
      .max(50, 'مقدار فیلد "گذرواژه" خیلی طولانی میباشد.')
      .required(' فیلد "گذرواژه" الزامی  میباشد.'),
    confirmPassword:Yup.string()
      .required(' فیلد "تکرار گذرواژه" الزامی  میباشد.')
      .oneOf([Yup.ref('password'), null], 'مفدار "تکرار گذرواژه"  با مقدار "گذرواژه" یکی نمیباشد.')
  });

  return(
    <View style={Styles.root} >
      <View style={Styles.header}>
        <IconBackArrow color='#000' width={35} height={35}/>
        <IconExclamation color='#000' width={40} height={40}/>
      </View>
      <View>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={SignupSchema}
          initialValues={{ fullName:'' ,email: '' ,password:'' ,confirmPassword:'' }}
          onSubmit={values => handleSubmit(values)}
        >
          {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
            <View style={Styles.form}>
              <Text style={Styles.signInText}> ثبت نام</Text>
              <TextInput
                style={Styles.textInput}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                placeholderTextColor='#333'
                placeholder='نام کامل'
              />
              {errors.fullName ? (
                <Text  style={Styles.errorText}>{errors.fullName}</Text>
              ) : null}

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

              <TextInput
                style={Styles.textInput}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                placeholderTextColor='#333'
                placeholder='تکرار گذرواژه'
              />
              {errors.confirmPassword ? (
                <Text  style={Styles.errorText}>{errors.confirmPassword}</Text>
              ) : null}
              <TouchableOpacity style={Styles.submit} onPress={()=>handleSubmit()}>
                <Text style={Styles.submitText}>ساخت اکانت جدید</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <Text style={Styles.conditionText}>
          به وسیله ثبت‌ نام تمامی
          {'\n'}
          <Linking style={Styles.link} title='شرایط' url='https://reactnative.dev/docs/linking?syntax=android' />
           و
          <Linking  style={Styles.link} title='قوانین'  url='https://github.com/crazycodeboy/react-native-splash-screen'/>
          ما را میپذیرید.
        </Text>
      </View>

      <View>

      </View>

    </View>
  );
}







