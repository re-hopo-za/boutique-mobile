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




export const numberToPersian = ( number ,separator = true ) => {
  const persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' ,',' :',' };
  number = number.toString().split('');
  number = number.map( ( i ,key)  => persian[number[key]] );
  return number.join('');
}




export const separator = ( num ) => {
  return num ? Number(num).toLocaleString() : '';
}



export const shadowStyle = () => {
  return {
    shadowColor: "#9a9a9a",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity:  0.23,
    shadowRadius: 11.78,
    elevation: 15
  }
}

export const textShadow = (color ='#000') => {
  return {
    textShadowColor:color,
    textShadowOffset:{
      width: 0,
      height: 0,
    },
    textShadowRadius:10,
    elevation: 19,
  }
}
