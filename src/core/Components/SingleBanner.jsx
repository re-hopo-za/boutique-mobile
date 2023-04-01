import { useCallback } from "react";
import { Image, TouchableOpacity } from "react-native";
import Ads from '../../resources/images/temporary/Ads.png'
import { sameSize } from "../Tools/Functions";

export default () => {
  const handlePress = useCallback(async () => {

  }, []);
  return (
      <TouchableOpacity onPress={handlePress} >
        <Image source={Ads} style={{
          resizeMode:'cover',
          height:sameSize(180),
          width:'100%'
        }} />
      </TouchableOpacity>
    );
};

