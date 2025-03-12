import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BtnBack = ({width = 30, height = 30, color = '#364152'}) => (
  <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1629 6.83709C13.529 7.2032 13.529 7.7968 13.1629 8.16291L7.26333 14.0625H25C25.5178 14.0625 25.9375 14.4822 25.9375 15C25.9375 15.5178 25.5178 15.9375 25 15.9375H7.26333L13.1629 21.8371C13.529 22.2032 13.529 22.7968 13.1629 23.1629C12.7968 23.529 12.2032 23.529 11.8371 23.1629L4.33709 15.6629C3.97097 15.2968 3.97097 14.7032 4.33709 14.3371L11.8371 6.83709C12.2032 6.47097 12.7968 6.47097 13.1629 6.83709Z"
      fill={color}
    />
  </Svg>
);
export default BtnBack;
