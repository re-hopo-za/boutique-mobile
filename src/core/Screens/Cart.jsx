
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
import { IconSelectedInput } from "../Tools/Icons";
import { TouchableOpacity } from "react-native-gesture-handler";


export default ({navigation}) =>  {


  const cart = {
    cartItems:[
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
   ],
    subTotal:325000,
    delivery:5000,
    discount:10000,
    total:310000,
  }



  return (
    <ScrollView style={Styles.root} >
      <Header page='Cart' />
      <Text style={Styles.cartTitle}>سبد خرید</Text>
      {
        cart.cartItems && cart.cartItems.map( item => (
          <CartItem key={item.id} item={item} />
        ))
      }

      <View style={Styles.addressView}>
        <Text style={Styles.addressTitleText}>آدرس ارسال</Text>
        <View style={Styles.addressSelectedView}>
          <IconSelectedInput width={20} height={20} color='#393737' />
          <Text style={Styles.addressSelectedText}>تهران خیابان فلسطین جنوبی, مابین لبافی نژاد و جمهوری پلاک 106 طبقه سوم-واحد 9</Text>
        </View>
        <TouchableOpacity style={Styles.addressChangeButton}>
          <Text style={Styles.addressChangeText}>تغییر آدرس</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.paymentView}>
        <Text style={Styles.paymentTitleText}>روش پرداخت</Text>
        <View style={Styles.paymentSelectedView}>
          <IconSelectedInput width={20} height={20} color='#393737' />
          <View style={Styles.paymentMethodView}>
            <Text style={Styles.paymentMethodTitle}>پرداخت اینترنتی</Text>
            <Text style={Styles.paymentMethodText}>به پرداخت بانک ملت </Text>
          </View>
        </View>
        <TouchableOpacity style={Styles.paymentChangeButton}>
          <Text style={Styles.paymentChangeText}>تغییر روش پرداخت</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.billView}>
        <View style={Styles.subTotalView}>
          <Text style={Styles.subTotalAmount}>{numberToPersian(separator(cart.subTotal))}تومان</Text>
          <Text style={Styles.subTotalTitle}>جمع جزء</Text>
        </View>
        <View style={Styles.subTotalView}>
          <Text style={Styles.subTotalAmount}>{numberToPersian(separator(cart.delivery))}تومان</Text>
          <Text style={Styles.subTotalTitle}>هزینه ارسال</Text>
        </View>
        <View style={Styles.subTotalView}>
          <Text style={Styles.subTotalAmount}>{numberToPersian(separator(cart.discount))}تومان</Text>
          <Text style={Styles.subTotalTitle}>تخفیف</Text>
        </View>
        <View style={Styles.subTotalView}>
          <Text style={Styles.totalAmount}>{numberToPersian(separator(cart.total))}تومان</Text>
          <Text style={Styles.totalTitle}>جمع کل</Text>
        </View>
      </View>

      <View style={Styles.purchaseView}>
        <TouchableOpacity style={Styles.purchaseButton}>
          <Text style={Styles.purchaseText}>ثبت سفارش</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation}/>
    </ScrollView>
  );
}



const CartItem = ({item}) => (
    <View style={Styles.cartItemView}>
      <View style={Styles.cartItemDetailsView}>
        <Text style={Styles.cartItemDetailsTitle}>{item.title}</Text>
        <Text style={Styles.cartItemDetailsModel}>{item.model}</Text>
        <View style={Styles.cartItemDetailsPriceView}>
          <Text style={Styles.cartItemDetailsCount}>x{item.count}</Text>
          <Text style={Styles.cartItemDetailsPrice}>{numberToPersian(item.price)} تومان </Text>
        </View>
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
  cartItemView:{
    paddingHorizontal:sameSize(30),
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:sameSize(15),
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
  cartItemImageView:{
    height:sameSize(90),
    width:sameSize(100),
  },
  cartItemImage:{
    height:sameSize(90),
    width:sameSize(100),
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
  },
  cartItemDetailsPriceView:{
    marginTop:sameSize(5),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  cartItemDetailsCount:{
    fontSize:12,
    fontFamily:'AzarMehrMedium',
    color:'#C6C6C6',
    textAlign:'right',
  },
  cartItemDetailsPrice:{
    fontSize:14,
    fontFamily:'AzarMehr-Bold',
    color:'#455CC7',
    textAlign:'right',
  },
  addressView:{
    paddingHorizontal:sameSize(30),
    marginTop:sameSize(30),
  },
  addressTitleText:{
    fontSize:17,
    fontFamily:'AzarMehr-Medium',
    color:'#404243',
  },
  addressSelectedView:{
    marginTop:sameSize(5),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  addressSelectedText:{
    width:'70%',
    fontSize:14,
    fontFamily:'AzarMehr-Medium',
    color:'#9D9D9D',
    textAlign:'right',
  },
  addressChangeButton:{
    marginTop:sameSize(10),
  },
  addressChangeText:{
    width:'100%',
    fontSize:14,
    fontFamily:'AzarMehr-Medium',
    textAlign:'right',
    color:'#FF5C5A'
  },
  paymentView:{
    paddingHorizontal:sameSize(30),
    marginTop:sameSize(30),
    backgroundColor:'#fff',
    paddingVertical:sameSize(20)
  },
  paymentTitleText:{
    fontSize:17,
    fontFamily:'AzarMehr-Medium',
    color:'#404243',
  },
  paymentSelectedView:{
    marginTop:sameSize(5),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  paymentMethodTitle:{
    width:'100%',
    fontSize:12,
    fontFamily:'AzarMehr-regular',
    color:'#9D9D9D',
    textAlign:'right',
  },
  paymentMethodText:{
    width:'100%',
    fontSize:14,
    fontFamily:'AzarMehr-Medium',
    color:'#9D9D9D',
    textAlign:'right',
  },
  paymentMethodView:{
    width:'80%',
    alignItems:'flex-end'
  },
  paymentChangeButton:{
    marginTop:sameSize(10),
  },
  paymentChangeText:{
    width:'100%',
    fontSize:14,
    fontFamily:'AzarMehr-Medium',
    textAlign:'right',
    color:'#FF5C5A'
  },
  billView:{
    paddingHorizontal:sameSize(30),
    marginTop:sameSize(30),
  },
  subTotalView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:sameSize(4)
  },
  subTotalTitle:{
    fontSize:15,
    fontFamily:'AzarMehr-Regular',
    textAlign:'right',
    color:'#9D9D9D'
  },
  subTotalAmount:{
    fontSize:14,
    fontFamily:'AzarMehr-Medium',
    textAlign:'right',
    color:'#9D9D9D',
  },

  totalTitle:{
    fontSize:16,
    fontFamily:'AzarMehr-Regular',
    textAlign:'right',
    color:'#222',
  },
  totalAmount:{
    fontSize:15,
    fontFamily:'AzarMehr-Medium',
    textAlign:'right',
    color:'#222'
  },
  purchaseView:{
    paddingHorizontal:sameSize(30),
    marginTop:sameSize(30),
  },
  purchaseButton:{
    borderRadius:sameSize(50),
    backgroundColor:'#FF5C5A',
    padding:sameSize(9)
  },
  purchaseText:{
    fontSize:16,
    fontFamily:'AzarMehr-Medium',
    textAlign:'center',
    color:'#fff',
  }

});
