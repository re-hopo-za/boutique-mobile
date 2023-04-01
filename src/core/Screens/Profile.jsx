
import {
  ScrollView,
  StyleSheet, Text, View, Image, FlatList,
} from "react-native";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { sameSize } from "../Tools/Functions";
import {
  IconBackArrow,
  IconDrawerBox,
  IconDrawerLocation,
  IconDrawerSettings,
  IconSelectedInput,
} from "../Tools/Icons";
import { TouchableOpacity } from "react-native-gesture-handler";


import profile from "../../resources/images/temporary/profile.png";


export default ({navigation}) =>  {

  const links = [
    {
      id : 1 ,
      title : 'جزییات حساب کاربری',
      link :'ProfileDetails'
    },
    {
      id : 2 ,
      title : 'کد‌های تخفیف',
      link :'Coupons'
    },
    {
      id : 3 ,
      title : 'اطلاعات تحویل ',
      link :'Delivery'
    },
    {
      id : 4 ,
      title : 'تنظیمات حریم خصوصی',
      link :'Privacy'
    },
    {
      id : 5 ,
      title : 'خروج',
      link :'Logout'
    },
  ]

  return (
    <View style={Styles.root} >
      <Header navigation={navigation}/>
      <Text style={Styles.cartTitle}>صفحه کاربری</Text>

      <View style={Styles.profileView}>
        <View style={Styles.profileDetailsView}>
          <Text style={Styles.profileTitleText}>رضا حسین پور</Text>
          <Text style={Styles.profileEmailText}>re.hopo.za@gmail.com</Text>
          <TouchableOpacity style={Styles.profileEditButton}>
            <Text style={Styles.profileEditText}>ویرایش حساب کاربری</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.profileImageView}>
          <Image style={Styles.profileImage} source={profile} />
        </View>
      </View>
      <View style={Styles.profileIconsView}>
        <TouchableOpacity style={Styles.profileIconsButton}>
          <Text style={Styles.profileIconsText}>سفارشات</Text>
          <IconDrawerBox width={30} height={30} color='#393737' />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.profileIconsButton}>
          <Text style={Styles.profileIconsText}>آدرس‌ها</Text>
          <IconDrawerLocation width={30} height={30} color='#393737' />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.profileIconsButton}>
          <Text style={Styles.profileIconsText}>تنظیمات</Text>
          <IconDrawerSettings width={30} height={30} color='#393737' />
        </TouchableOpacity>
      </View>
      <FlatList
        style={Styles.flatList}
        data={links}
        renderItem={({item}) => <Links item={item} />}
        keyExtractor={item => item.id}
      />
      <Footer navigation={navigation}/>
    </View>
  );
}



const Links = ({item}) => (
  <TouchableOpacity style={Styles.linkItemView}>
    <IconBackArrow width={25} height={25} color='#707070' />
    <Text style={Styles.linkItemDetailsTitle}>{item.title}</Text>
  </TouchableOpacity>
);


const Styles = StyleSheet.create({
  root: {
    backgroundColor:'#F6F9FC',
    flex:1,
  },
  cartTitle:{
    fontSize:23,
    fontFamily:'AzarMehr-Bold',
    color:'#404243',
    paddingHorizontal:sameSize(20),
    marginTop:sameSize(10),
  },
  profileView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    paddingHorizontal:sameSize(20)
  },
  profileImageView:{
    height:sameSize(100),
    width:sameSize(100),
    marginTop:sameSize(15),
  },
  profileImage:{
    height:sameSize(100),
    width:sameSize(100),
    borderRadius:sameSize(12)
  },
  profileDetailsView:{
    paddingRight:sameSize(7),
    alignItems:'flex-end',
    justifyContent:'flex-end',
    flex:1,
    gap:sameSize(4),
  },
  profileTitleText:{
    fontSize:18,
    fontFamily:'AzarMehr-Regular',
    color:'#404243',
    textAlign:'right',
  },
  profileEmailText:{
    fontSize:12,
    fontFamily:'AzarMehr-Regular',
    color:'#404243',
    textAlign:'right',
  },
  profileEditButton:{
    backgroundColor:'#FF5C5A',
    borderRadius:sameSize(20),
    marginTop:sameSize(7),
    paddingVertical:sameSize(2),
    paddingHorizontal:sameSize(9)
  },
  profileEditText:{
    fontSize:12,
    fontFamily:'AzarMehr-Regular',
    color:'#fff',
    textAlign:'right',
  },
  profileIconsView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:sameSize(20),
    width:'100%',
    marginTop:sameSize(20),
    paddingBottom:sameSize(15),
    borderBottomWidth:1,
    borderColor:'#eee',
  },
  profileIconsButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  profileIconsText:{
    fontSize:13,
    fontFamily:'AzarMehr-Regular',
    color:'#333',
    textAlign:'right'
  },
  flatList:{
    marginTop:sameSize(15),
  },
  linkItemView:{
    paddingHorizontal:sameSize(30),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:sameSize(15),
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
  linkItemDetailsTitle:{
    fontSize:14,
    fontFamily:'AzarMehr-Light',
    color:'#000',
    marginTop:sameSize(5),
    textAlign:'right',
  }
});
