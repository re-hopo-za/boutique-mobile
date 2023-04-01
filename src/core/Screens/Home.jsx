
import {
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../Layouts/Header";
import Search from "../Sections/SearchSection";
import CarouselSingle from "../Components/CarouselMain";
import Categories from "../Sections/CategoriesIconSection";
import CarouselImageOver from "../Components/CarouselImageOver";
import GridSection from "../Sections/GridSection";
import MeshSection from "../Sections/MeshSection";
import CarouselMultiItems from "../Components/CarouselMultiItems";
import Footer from "../Layouts/Footer";
import shoes_a from "../../resources/images/temporary/shoes-1.png";
import shoes_b from "../../resources/images/temporary/shoes-2.png";
import shoes_c from "../../resources/images/temporary/shoes-3.png";
import denims_a from "../../resources/images/temporary/denims-1.png";
import denims_b from "../../resources/images/temporary/denims-2.png";
import denims_c from "../../resources/images/temporary/denims-3.png";
import denims_d from "../../resources/images/temporary/denims-4.png";
import shomis_a from "../../resources/images/temporary/shomis-1.png";
import shomis_b from "../../resources/images/temporary/shomis-2.png";
import shomis_c from "../../resources/images/temporary/shomis-3.png";
import engagement_a from "../../resources/images/temporary/engagement-1.png";
import engagement_b from "../../resources/images/temporary/engagement-2.png";
import engagement_c from "../../resources/images/temporary/engagement-3.png";


export default ({navigation}) =>  {




  const denimsItems =  [
    {
      id:1,
      title:'شلوار جین ایزی دو',
      model:'مدل M2045001DM-58',
      cover:denims_a
    },
    {
      id:2,
      title:'شلوار جین ال سی وایکیکی',
      model:'مدل L3030',
      cover:denims_b
    },
    {
      id:3,
      title:'شلوار جین وینترهارت',
      model:'مدل 218125758',
      cover:denims_c
    },
    {
      id:4,
      title:'شلوار جین لیورجی',
      model:'مدل MO کد M1720-6',
      cover:denims_d
    },
  ];
  const shoesItems = [
    {
      id:1,
      title:'کفش مخصوص دویدن',
      price:225000,
      cats:['زنانه ورزشی'],
      cover:shoes_a
    },
    {
      id:2,
      title:'کفش پیاده روی سارزی',
      price:356000,
      cats:['زنانه پیاده‌روی'],
      cover:shoes_b
    },
    {
      id:3,
      title:'کفش پیاده روی سارزی',
      price:955000,
      cats:['زنانه مجلسی'],
      cover:shoes_c
    },
    {
      id:4,
      title:'کفش پیاده روی سارزی',
      price:955000,
      cats:['زنانه مجلسی'],
      cover:shoes_c
    },
  ];
  const plaidShirtItems = [
    {
      id:1,
      title:'شومیز زنانه اچ اند ام',
      model:'مدل 00217',
      price:325600,
      cover:shomis_a
    },
    {
      id:2,
      title:'شومیز زنانه',
      model:'مدل RZ-ARSA82039-SHO.RA-SE',
      price:248000,
      cover:shomis_b
    },
    {
      id:3,
      title:'شومیز زنانه',
      model:'مدل RZ-ARSA82039-SHO.RA-TOO',
      price:744000,
      cover:shomis_c
    },
  ];
  const engagementItems = [
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
      <Header navigation={navigation} />
      <Search/>
      <CarouselSingle/>
      <Categories />
      <CarouselImageOver
        itle='کفش زنانه'
        route='Shop'
        endpoint='women_denims'
        items={shoesItems}
      />
      <MeshSection
        title='جین زنانه'
        route='Shop'
        endpoint='women_denims'
        items={denimsItems}
      />
      <GridSection
        title='شومیز زنانه'
        route='Shop'
        endpoint='women_plaid_shirt'
        items={plaidShirtItems}
      />
      <CarouselMultiItems
        title='لباس نامزدی زنانه'
        route='Shop'
        endpoint='women_denims'
        items={engagementItems}
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
