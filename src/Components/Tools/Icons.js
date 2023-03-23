import Svg, { Circle, Defs, G, Path } from "react-native-svg";


export const IconBackArrow = ({color ,width ,height }) =>{
  return (
    <Svg height={width} width={height}  viewBox="0 0 24 20.586">
      <Path
        data-name="Back Arrow"
        d="M3.414 9.293H23a1 1 0 1 1 0 2H3.414L11 18.879a1 1 0 0 1-1.414 1.414L.293 11a1 1 0 0 1 0-1.414L9.586.293A1 1 0 0 1 11 1.707Z"
        fill={color}
      />
    </Svg>
  )
}


export const IconExclamation = ({color ,width ,height }) =>{
  return (
    <Svg height={width} width={height}  viewBox="0 0 24 24">
      <Defs>
        <Circle id="a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </Circle>
      </Defs>
      <G clipPath="url(#a)">
        <Path fill={color} d="M0 0h24v24H0z" />
        <Path
          d="M3.515 20.486A12 12 0 0 1 20.486 3.515 12 12 0 0 1 3.515 20.486ZM2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm9 5v-5a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0Zm0-10a1 1 0 1 1 1 1 1 1 0 0 1-1-1Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}


export const IconMobile = ({color ,width ,height }) =>{
  return (
    <Svg height={width} width={height}  viewBox="0 0 24 24">
      <G>
        <Path
          d="M302.933 42.667h-51.2c-7.074 0-12.8 5.726-12.8 12.8s5.726 12.8 12.8 12.8h51.2c7.074 0 12.8-5.726 12.8-12.8s-5.726-12.8-12.8-12.8z"
          fill={color}
          data-original={color}
        />
        <Path
          d="M358.4 0H153.6c-28.228 0-51.2 22.972-51.2 51.2v409.6c0 28.228 22.972 51.2 51.2 51.2h204.8c28.228 0 51.2-22.972 51.2-51.2V51.2c0-28.228-22.972-51.2-51.2-51.2zM384 460.8c0 14.14-11.46 25.6-25.6 25.6H153.6c-14.14 0-25.6-11.46-25.6-25.6V51.2c0-14.14 11.46-25.6 25.6-25.6h204.8c14.14 0 25.6 11.46 25.6 25.6v409.6z"
          fill={color}
          data-original={color}
        />
        <Circle
          cx={256}
          cy="443.733"
          r="25.6"
          fill={color}
          data-original={color}
        />
        <Circle
          cx="209.067"
          cy="55.467"
          r="12.8"
          fill={color}
          data-original={color}
        />
      </G>
    </Svg>
  )
}
