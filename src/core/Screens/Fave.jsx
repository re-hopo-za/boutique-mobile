
import {
  FlatList,
  ScrollView,
  StyleSheet, Text, View, Image, VirtualizedList,
} from "react-native";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import denims_a from "../../resources/images/temporary/denims-1.png";
import denims_b from "../../resources/images/temporary/denims-2.png";
import denims_c from "../../resources/images/temporary/denims-3.png";
import denims_d from "../../resources/images/temporary/denims-4.png";
import { numberToPersian, sameSize, separator } from "../Tools/Functions";
import { IconHeart, IconSelectedInput } from "../Tools/Icons";
import { TouchableOpacity } from "react-native-gesture-handler";


export default ({navigation}) =>  {


  const faves = [
      {
        id:1,
        count:4,
        title:'شلوار جین ایزی دو',
        model:'مدل M2045001DM-58',
        cover:denims_a,
        price:185000
      },
      {
        id:2,
        count:1,
        title:'شلوار جین ال سی وایکیکی',
        model:'مدل L3030',
        cover:denims_b,
        price:235000
      },
      {
        id:3,
        count:3,
        title:'شلوار جین وینترهارت',
        model:'مدل 218125758',
        cover:denims_c,
        price:195000
      },
      {
        id:4,
        count:1,
        title:'شلوار جین لیورجی',
        model:'مدل MO کد M1720-6',
        cover:denims_d,
        price:205000
      },

  ];



  const getItemCount = _data => 50;


  return (
    <View style={Styles.root} >
      <Header page='Cart' />
      <Text style={Styles.cartTitle}>سبد خرید</Text>

      <FlatList
        style={Styles.flatList}
        data={faves}
        renderItem={({item}) => <FaveItem item={item} />}
        keyExtractor={item => item.id}
      />

      <Footer navigation={navigation}/>
    </View>
  );
}



const FaveItem = ({item}) => (
    <View style={Styles.cartItemView}>
      <IconHeart width={25} height={25} color='#707070' />
      <View>
        <Text style={Styles.cartItemDetailsTitle}>{item.title}</Text>
        <Text style={Styles.cartItemDetailsModel}>{item.model}</Text>
      </View>
      <View style={Styles.cartItemImageView}>
        <Image style={Styles.cartItemImage} source={item.cover}/>
      </View>
    </View>
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
    paddingHorizontal:sameSize(30),
    marginTop:sameSize(10),
  },
  flatList:{
    height:sameSize(100),
    overflow:'scroll',
    marginTop:sameSize(20)
  },
  cartItemView:{
    justifyContent:'space-between',
    paddingHorizontal:sameSize(30),
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:sameSize(15),
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
  cartItemImageView:{
    height:sameSize(80),
    width:sameSize(70),
  },
  cartItemImage:{
    height:sameSize(80),
    width:sameSize(70),
    borderRadius:sameSize(8),
    resizeMode:'cover'
  },
  cartItemDetailsView:{
    height:sameSize(90),
    flex:1,
    paddingRight:sameSize(15)
  },
  cartItemDetailsTitle:{
    fontSize:17,
    fontFamily:'AzarMehr-Light',
    color:'#000',
    marginTop:sameSize(5),
    textAlign:'right',
  },
  cartItemDetailsModel:{
    fontSize:12,
    fontFamily:'AzarMehr-Regular',
    color:'#C6C6C6',
    textAlign:'right',
    paddingTop:sameSize(5)
  },

});
