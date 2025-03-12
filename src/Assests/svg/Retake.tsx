import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Retake = ({stroke = '#1C274C', ...props}) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M18.864 8.05026L18.1569 7.34315C15.0327 4.21896 9.96734 4.21896 6.84315 7.34315C3.71895 10.4673 3.71895 15.5327 6.84315 18.6569C9.96734 21.7811 15.0327 21.7811 18.1569 18.6569C19.9737 16.84 20.734 14.3668 20.4377 12.0005M18.864 8.05026H14.6213M18.864 8.05026V3.80762"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Retake;
