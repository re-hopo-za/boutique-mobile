import { useCallback } from "react";
import { Button, Linking, Text, TouchableOpacity } from "react-native";


export default ({title ,url ,style}) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL( url );
  }, []);
  return (
      <Text onPress={handlePress} style={style} > {title} </Text>
    );
};
