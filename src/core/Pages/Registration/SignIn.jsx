import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Formik } from "formik";
import * as Yup from 'yup';
import Linking from "../../Components/Linking";
import { heightScale, sameSize } from "../../Tools/Functions";
import { IconBackArrow, IconExclamation } from "../../Tools/Icons";


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
    form:{
      paddingRight:sameSize(30),
      paddingLeft:sameSize(30),
      paddingTop:sameSize(10),
    },
    signInText:{
      color:'#2D2D2F',
      paddingTop:sameSize(15),
      fontSize:20,
      fontFamily:'AzarMehr-Medium',
      textAlign:'center'
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
    conditionText:{
      color:'#333',
      fontFamily:'AzarMehr-Medium',
      fontSize:16,
      textAlign:"center",
      paddingTop:sameSize(15)
    },
    blueText:{
      color:'#2967FF',
      fontFamily:'AzarMehr-Bold',
    },
    link:{
      color:'#2967FF'
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

  });



  const handleSubmit = (values) => {
    console.log(values);
  }


  const back = () => {
    navigation.goBack();
  }

  const SignUp = () => {
    navigation.navigate('SignUp');
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
        <View>
          <View style={Styles.headerView}>
            <TouchableOpacity  onPress={back}>
              <IconBackArrow color='#000' width={heightScale(20)} height={heightScale(20)}/>
            </TouchableOpacity>
            <IconExclamation color='#000' width={heightScale(20)} height={heightScale(20)}/>
          </View>
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
                  <Text style={Styles.errorText}>{errors.confirmPassword}</Text>
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

        <View style={Styles.bottomView}>
          <Pressable style={Styles.loginButton} onPress={SignUp}>
            <Text style={Styles.loginText}>ورود</Text>
          </Pressable>
        </View>
      </View>
  );
}







