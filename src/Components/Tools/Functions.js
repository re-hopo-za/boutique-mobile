import { Dimensions, PixelRatio } from "react-native";




export const windowWidth  = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const sameSize = (dimension) => {
  const standardWidth = 375.0;
  return (dimension / standardWidth) * windowWidth;
}


export const heightScale = (dimension) => {
  const standardHeight = 667.0;
  return (dimension / standardHeight) * windowHeight;
}



export const isNumeric = (str) => {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}





