import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import { IconArrowLeft, IconChild, IconKids, IconMan, IconWoman } from "../Tools/Icons";
import { sameSize } from "../Tools/Functions";
import { useState } from "react";
import ShowAll from "../Components/ShowAll";




export default () =>  {

  const [active ,setActive] = useState( 0 );


  return (
    <View style={Styles.root}>
      <ShowAll title='دسته بندی‌ها' />

      <View style={Styles.categoriesView}>
        <TouchableOpacity style={ active === 0 ? Styles.categoryItemActive : Styles.categoryItem} onPress={()=>setActive(0)}>
          <IconWoman color={active === 0 ? '#fff' :'#455CC7'} width={sameSize(40)} height={sameSize(40) } />
          <Text style={active === 0 ? Styles.categoryItemTextActive :Styles.categoryItemText }>زنانه</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ active === 1 ? Styles.categoryItemActive : Styles.categoryItem} onPress={()=>setActive(1)}>
          <IconMan color={active === 1 ? '#fff' :'#455CC7'} width={sameSize(40)} height={sameSize(40) } />
          <Text style={active === 1 ? Styles.categoryItemTextActive :Styles.categoryItemText }>مردانه</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ active === 2 ? Styles.categoryItemActive : Styles.categoryItem} onPress={()=>setActive(2)}>
          <IconKids color={active === 2 ? '#fff' :'#455CC7'} width={sameSize(45)} height={sameSize(45) } />
          <Text style={active === 2 ? Styles.categoryItemTextActive :Styles.categoryItemText }>بچه‌گانه</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ active === 3 ? Styles.categoryItemActive : Styles.categoryItem} onPress={()=>setActive(3)}>
          <IconChild color={active === 3 ? '#fff' :'#455CC7'} width={sameSize(40)} height={sameSize(40) } />
          <Text style={active === 3 ? Styles.categoryItemTextActive :Styles.categoryItemText }>نوزاد</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const Styles = StyleSheet.create({
  root: {
    paddingHorizontal:sameSize(20),
    paddingTop:sameSize(10),
  },
  allCat:{
    fontFamily:'AzarMehr-Medium',
    fontSize:13,
    color:'#9D9D9D'
  },
  categoriesView:{
    paddingTop:sameSize(20),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  categoryItem:{
    backgroundColor:'#DCE0F9',
    width:sameSize(75),
    height:sameSize(70),
    alignItems:'center',
    justifyContent:'center',
    paddingTop:sameSize(4),
    borderRadius:sameSize(7),

  },
  categoryItemActive:{
    backgroundColor:'#455CC7',
    width:sameSize(75),
    height:sameSize(75),
    alignItems:'center',
    justifyContent:'center',
    paddingTop:sameSize(5),
    borderRadius:sameSize(7)
  },
  categoryItemText:{
    fontFamily:'AzarMehr-Regular',
    fontSize:13,
    color:'#455CC7'
  },
  categoryItemTextActive:{
    fontFamily:'AzarMehr-Regular',
    fontSize:14,
    color:'#fff',
  }

});
