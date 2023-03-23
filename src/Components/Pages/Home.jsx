import {useDispatch ,useSelector} from "react-redux";
import { changeSchema ,colorSchemaSlice } from "../Tools/colorSchemaSlice";

import {
  Button,
  StyleSheet,
  Text, useColorScheme,
  View,
} from "react-native";
import { useEffect, useState } from "react";



export default () =>  {
  const dispatch    = useDispatch();
  const colorSchema = useSelector(colorSchemaSlice);
  const [darkTheme ,setDarkTheme] = useState( colorSchema.color === 'white' );




  const changeTheme = () => {
    console.log(!darkTheme);
    setDarkTheme(!darkTheme);
    dispatch(
      changeSchema({darkTheme:!darkTheme})
    )
  }

  const styles = StyleSheet.create({
    homePage: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    Text: {
      color: colorSchema.color
    }
  });


  return (
    <View style={styles.homePage}>
      <Text style={styles.Text}>Home Page</Text>
      <Button title='Test' onPress={changeTheme}/>
    </View>
  );
}



