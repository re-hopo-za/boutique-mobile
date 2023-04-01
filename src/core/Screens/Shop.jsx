
import {
  ScrollView,
  StyleSheet,
} from "react-native";
import Footer from "../Layouts/Footer";
import Banner from "../Sections/BannerSection";
import CarouselCategories from "../Components/CarouselCategories";
import CarouselMultiItems from "../Components/CarouselMultiItems";
import cat_a from "../../resources/images/temporary/cat-1.png";
import cat_b from "../../resources/images/temporary/cat-2.png";
import engagement_a from "../../resources/images/temporary/engagement-1.png";
import engagement_b from "../../resources/images/temporary/engagement-2.png";
import engagement_c from "../../resources/images/temporary/engagement-3.png";
import recom_a from "../../resources/images/temporary/recom-1.png";
import recom_b from "../../resources/images/temporary/recom-2.png";
import recom_c from "../../resources/images/temporary/recom-3.png";

import SingleBanner from "../Components/SingleBanner";


export default ({navigation}) =>  {


  const categories = [
    {
      id:1,
      title:'لباس نامزدی',
      subtitle:'زنانه ',
      cover:cat_a
    },
    {
      id:2,
      title:'لباس ورزشی',
      subtitle:'زنانه',
      cover:cat_b
    },
    {
      id:3,
      title:'لباس عروسی',
      subtitle:'زنانه',
      cover:cat_a
    },
    {
      id:3,
      title:'لباس ',
      subtitle:'زنانه',
      cover:cat_b
    }

  ];
  const recommendation = [
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
  const review = [
    {
      id:1,
      title:'لباس مجلسی آسنات فرمالیته نامزدی',
      price:225000,
      model:'نامزدی ',
      cover:engagement_a
    },
    {
      id:2,
      title:'لباس مجلسی و نامزدی ماکسی',
      price:356000,
      model:'عقد ، نامزدی ، حنابندان',
      cover:engagement_b
    },
    {
      id:3,
      title:'لباس مجلسی هندی',
      price:955000,
      model:'مجلسی ، نامزدی',
      cover:engagement_c
    },
    {
      id:3,
      title:'لباس مجلسی هندی',
      price:955000,
      model:'مجلسی ، نامزدی',
      cover:engagement_c
    }

  ];
  return (
    <ScrollView style={Styles.root} >

      <Banner navigation={navigation}/>
      <CarouselCategories
        title='دسنه بندی‌ها'
        route='Categories'
        items={categories}
      />
      <CarouselMultiItems
        title='پیشنهادی بوتیک'
        route='Shop'
        endpoint='women_denims'
        items={recommendation}
      />
      <SingleBanner/>
      <CarouselMultiItems
        title='اخیرا مشاهده شده'
        route='Shop'
        endpoint='women_denims'
        items={review}
      />
      <Footer navigation={navigation}/>
    </ScrollView>
  );
}


const Styles = StyleSheet.create({
  root: {
    backgroundColor:'#F6F9FC',
    flex:1,
  },
});
