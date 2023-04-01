
import {
  ImageBackground,
  ScrollView,
  StyleSheet, Text, TouchableOpacity, View,
} from "react-native";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import { numberToPersian, sameSize } from "../Tools/Functions";
import CarouselSinglePage from "../Carousels/CarouselSinglePage";
import source_a from "../../resources/images/temporary/single-page(1).jpg";
import source_b from "../../resources/images/temporary/single-page(2).jpg";
import source_c from "../../resources/images/temporary/single-page(3).jpg";
import source_d from "../../resources/images/temporary/single-page(4).jpg";
import { IconCart, IconCartWithCount, IconHeart } from "../Tools/Icons";
import recom_a from "../../resources/images/temporary/recom-1.png";
import recom_b from "../../resources/images/temporary/recom-2.png";
import recom_c from "../../resources/images/temporary/recom-3.png";
import CarouselMultiBorder from "../Carousels/CarouselMultiBorder";

const best = [
  {
    id:1,
    title:'لباس مجلسی آسنات فرمالیته نامزدی',
    price:225000,
    model:'نامزدی ',
    cover:recom_a
  },
  {
    id:2,
    title:'لباس مجلسی و نامزدی ماکسی',
    price:356000,
    model:'عقد ، نامزدی ، حنابندان',
    cover:recom_b
  },
  {
    id:3,
    title:'لباس مجلسی هندی',
    price:955000,
    model:'مجلسی ، نامزدی',
    cover:recom_c
  },
  {
    id:3,
    title:'لباس مجلسی هندی',
    price:955000,
    model:'مجلسی ، نامزدی',
    cover:recom_a
  }

];


export default ({navigation ,item}) =>  {

   item = {
    id: 1,
    title: 'مانتو زنانه السانا مدل ماهسین',
    brand:'' ,
    off: 20,
    heart:'',
    description:'شومیز اکنون یکی از آیتم های پرکاربرد و از استایل های مهمانی به حساب می آید و با دامن، شلوار و سرهمی ترکیب های خوبی می سازد؛ به همین دلیل طراحان ما توجه زیادی به ایجاد تنوع در مدل های مختلف شومیز داشته اند. مدل های شومیز مجلسی 2020 مطابق با عکس ژورنال با تن خوری عالی، فوق العاده شیک و دوست داشتنی می باشند.',
    r_price:20000,
    s_price:18500,
    relatedProducts:[

    ],
    images:[
      source_a,
      source_b,
      source_c,
      source_d
    ]
  };

  return (
    <ScrollView style={Styles.root} >

      <View style={Styles.carouseView}>
        <View style={Styles.headerView}>
          <Header page='ProductSingle' navigation={navigation}/>
        </View>
        <CarouselSinglePage items={item.images} />
      </View>

      <View style={Styles.detailsView}>
        {
          item.off > 0 ?
            <Text style={Styles.offText}> %{numberToPersian(item.off)} تخفیف </Text>
          : ''
        }
        <TouchableOpacity>
          <IconHeart width={sameSize(22)} height={sameSize(22)} color='#707070' />
        </TouchableOpacity>
      </View>

      <View style={Styles.titleView}>
        <View style={Styles.priceView}>
          {
            item.r_price ?
              <Text style={Styles.rPrice}>{numberToPersian(item.r_price)}تومان</Text>
              : ''
          }
          <Text style={Styles.sPrice}>{numberToPersian(item.s_price)}تومان</Text>
        </View>
        <Text style={Styles.titleText}> {item.title} </Text>
      </View>

      <View style={Styles.description}>
        <Text style={Styles.descriptionSubject}>توضیحات محصول</Text>
        <Text style={Styles.descriptionText}> {item.description} </Text>
      </View>

      <View>
        <CarouselMultiBorder
          title='محصولات مرتبط'
          route='Shop'
          endpoint='women_denims'
          items={best}/>
      </View>

      <View style={Styles.addToCartView}>
        <TouchableOpacity style={Styles.cartBtn}>
          <IconCartWithCount width={sameSize(40)} height={sameSize(40)} count={numberToPersian(2)}/>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.addToCartBtn}>
          <Text style={Styles.addToCartBtnText}> افزودن به سبد </Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation}/>
    </ScrollView>
  );
}


const Styles = StyleSheet.create({
  root: {
    backgroundColor:'#fff',
    flex:1,
  },
  carouseView: {
    width:'100%',
    height:sameSize(350),
  },
  headerView:{
    position:'absolute',
    width:'100%',
    zIndex:2,
    top:0
  },
  detailsView:{
    justifyContent:'space-between',
    flexDirection:'row',
    height:sameSize(30),
    marginTop:sameSize(10),
    paddingHorizontal:sameSize(20),
    alignItems:'center',
    width:'100%',
  },
  offText:{
    fontFamily:'AzarMehr-Medium',
    borderWidth:2,
    fontSize:15,
    borderColor:'#455CC7',
    paddingHorizontal:sameSize(7),
    paddingTop:sameSize(3),
    borderRadius:sameSize(5),
    color:'#455CC7',
  },
  bannerTitle:{
    fontFamily:'AzarMehr-Medium',
    fontSize:25,
    color:'#333',
  },
  titleView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    paddingHorizontal:sameSize(20),
    marginTop:sameSize(15),
  },
  priceView:{
    alignItems:'flex-start',
    alignSelf:'flex-end'
  },
  titleText:{
    fontFamily:'AzarMehr-Medium',
    fontSize:20,
    color:'#333',
    width:sameSize(160),
    lineHeight:sameSize(28)
  },
  rPrice:{
    fontFamily:'AzarMehr-Regular',
    fontSize:13,
    color:'#9FA3A8',
    lineHeight:sameSize(28),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  sPrice:{
    fontFamily:'AzarMehr-Medium',
    fontSize:20,
    color:'#455CC7',
  },
  description:{
    width:'100%',
    paddingHorizontal:sameSize(20),
    marginTop:sameSize(15),
  },
  descriptionSubject:{
    fontFamily:'AzarMehr-Medium',
    fontSize:17,
    color:'#000',
  },
  descriptionText:{
    marginTop:sameSize(5),
    fontFamily:'AzarMehr-Regular',
    fontSize:14,
    color:'#A2A2A2',
  },
  addToCartView:{
    flexDirection:'row',
    paddingHorizontal:sameSize(20),
    marginTop:sameSize(15),
    alignItems:'center',
    justifyContent:'space-between',
  },
  cartBtn:{
    backgroundColor:'#F2F2F2',
    borderRadius:sameSize(5),
    paddingHorizontal:sameSize(7 ),
    paddingVertical:sameSize(3),
    alignItems:'center',
    justifyContent:'center',
  },
  addToCartBtn:{
    backgroundColor:'#455CC7',
    width:'80%',
    paddingHorizontal:sameSize(7 ),
    paddingVertical:sameSize(3),
    borderRadius:sameSize(5),
    alignItems:'center'
  },
  addToCartBtnText:{
    height:sameSize(40),
    fontFamily:'AzarMehr-Medium',
    fontSize:16,
    color:'#fff',
    textAlign:'center' ,
    verticalAlign:'middle'
  }
});
