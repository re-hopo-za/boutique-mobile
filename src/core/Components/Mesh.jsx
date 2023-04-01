import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text, Image,
} from "react-native";

import { sameSize, shadowStyle } from "../Tools/Functions";
import { useState } from "react";
import ShowAll from "../Components/ShowAll";

import denims_a from "../../resources/images/temporary/denims-1.png";
import denims_b from "../../resources/images/temporary/denims-2.png";
import denims_c from "../../resources/images/temporary/denims-3.png";
import denims_d from "../../resources/images/temporary/denims-4.png";



export default () =>  {
  const [active ,setActive] = useState( 0 );

  const items = [
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

  return (
    <View style={Styles.root}>
      <ShowAll title='جین زنانه' />

      <View style={Styles.meshView}>
        {items.length && items.map( item => (
          <View style={Styles.meshItem} key={item?.id}>
            <Image style={Styles.meshImage} source={item?.cover} />
            <Text style={Styles.meshTitle} >
              {item?.title}
            </Text>
            <Text style={Styles.meshModel} >
              {item?.model}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}



const Styles = StyleSheet.create({
  root: {
    paddingHorizontal:sameSize(20),
    paddingTop:sameSize(10),
  },
  meshView:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  meshItem:{
    width:'47%',
    backgroundColor:'#fff',
    marginTop:sameSize(17),
    borderRadius:sameSize(20),
    overflow:'hidden',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:sameSize(7),
    ...shadowStyle()
  },
  meshImage:{
    width:'100%',
    resizeMode:'cover',
    height:sameSize(200)
  },
  meshTitle:{
    fontFamily:'AzarMehr-Medium',
    fontSize:13,
    color:'#404243',
    paddingTop:sameSize(7)

  },
  meshModel:{
    fontFamily:'AzarMehr-Medium',
    fontSize:10,
    color:'#ACACAC',
  },
});
