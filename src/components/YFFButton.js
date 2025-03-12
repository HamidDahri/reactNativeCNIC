import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
// import {Fonts, fonts} from '../../styles/fonts';
// import {COLOR} from '../../styles/Constant';

export const YFFButtonTypes = {
  white: 'Wite',
  theme: 'Theme',
  border: 'Border',
  greeen: 'Green',
  disable: 'Disable',
  grayBorder: 'grayBorder',
};

const YFFButton = ({title, type, onPress, showEnable, image, marginBtm}) => {
  return (
    // <View style={styles.btnContainer}>
    <View style={{width: '100%'}}>
      <YFFButtons
        title={title}
        type={type}
        onPress={onPress}
        showEnable={showEnable}
        image={image}
        marginBtm={marginBtm}
      />
    </View>
    // </View>
  );
};

const YFFButtons = ({title, type, onPress, showEnable, image, marginBtm}) => {
  if (type === YFFButtonTypes.disable || showEnable === false) {
    return (
      <TouchableOpacity onPress={onPress} disabled={true}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: '#9aa4b2',
              marginBottom:
                marginBtm !== undefined && marginBtm !== null
                  ? marginBtm
                  : styles.container.marginBottom,
            },
          ]}>
          <Text style={[styles.btnText, {color: 'white'}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (type === YFFButtonTypes.theme) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: '#FC1267',
              marginBottom:
                marginBtm !== undefined && marginBtm !== null
                  ? marginBtm
                  : styles.container.marginBottom,
            },
          ]}>
          <Text style={[styles.btnText, {color: 'white'}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (type === YFFButtonTypes.white) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: 'white',
              marginBottom:
                marginBtm !== undefined && marginBtm !== null
                  ? marginBtm
                  : styles.container.marginBottom,
            },
          ]}>
          <View style={image ? styles.btnImage : {}}>
            {image && <View>{image}</View>}
            <Text
              style={[
                styles.btnText,
                image ? {color: '#202939', left: 10} : {color: '#FC1267'},
              ]}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else if (type === YFFButtonTypes.border) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              borderColor: 'white',
              borderWidth: 1,
              marginBottom:
                marginBtm !== undefined && marginBtm !== null
                  ? marginBtm
                  : styles.container.marginBottom,
            },
          ]}>
          <Text style={[styles.btnText, {color: 'white'}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (type === YFFButtonTypes.greeen) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: '#12B76A',
              marginBottom:
                marginBtm !== undefined && marginBtm !== null
                  ? marginBtm
                  : styles.container.marginBottom,
            },
          ]}>
          <Text style={[styles.btnText, {color: 'white'}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (type === YFFButtonTypes.grayBorder) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: '#ffffff',
              borderColor: '#D0D5DD',
              borderWidth: 1,
              marginBottom:
                marginBtm !== undefined && marginBtm !== null
                  ? marginBtm
                  : styles.container.marginBottom,
            },
          ]}>
          <Text style={[styles.btnText, {color: '#344054'}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default YFFButton;

const {width: deviceWidth} = Dimensions.get('screen');

const styles = StyleSheet.create({
  btnImage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: 24,
    position: 'absolute',
  },
  container: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 13,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 500,
    // fontFamily: Fonts.Poppins500,
  },
  btnContainer: {
    // alignItems: 'center',
    // width: deviceWidth,
  },
});

// const lockImage = require('../Assests/globe.png');

// const YFFButton = ({disbaled, onPress, title, type, position, modal, payment}) => {
//     if (type === YFFButtonTypes.theme) {
//         return(
//             <TouchableOpacity style={[styles.button, disbaled ? styles.bgGray : styles.bgPink,
//                 {marginBottom: modal ? 0 : 25}
//             ]}
//             disabled={disbaled}
//             onPress={onPress}>
//                {
//                 payment && <Image source={lockImage} />
//                }
//                 <Text style={styles.buttonText}>{title}</Text>

//             </TouchableOpacity>
//         );
//     }
//     else if (type === YFFButtonTypes.white) {
//         return(
//             <TouchableOpacity style={[styles.button, {backgroundColor: '#fff', width: '100%',
//                 marginBottom: 10, paddingHorizontal: 24, justifyContent: position ? 'center' : 'flex-start'
//             }]}
//             onPress={onPress}>
//                 <Text style={[styles.buttonText, {color: '#000'}]}>{title}</Text>
//             </TouchableOpacity>
//         );
//     }
//     else if (type === YFFButtonTypes.border) {
//         return(
//             <TouchableOpacity style={[styles.button, {backgroundColor: 'transparent',
//                 borderWidth: 1, width: '100%', borderColor: '#D0D5DD'
//             },
//             ]}>
//                 <Text style={[styles.buttonText, {color: '#000'}]}>{title}</Text>
//             </TouchableOpacity>
//         );
//     }
//     else if (type === YFFButtonTypes.greeen) {
//         <TouchableOpacity style= {[styles.button, {backgroundColor: '#12B76A', bottom: 8,
//             position: 'absolute', alignSelf: 'center'
//         }]}
//         disabled={disbaled}
//         onPress={onPress}>
//             <Text style={[styles.buttonText]} >{title}</Text>
//         </TouchableOpacity>
//     };
// };

// export default YFFButton;

// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: COLOR.theme,
//         borderRadius: 50,
//         width: '100%',
//         paddingVertical: 13,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//         gap: 5,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: '500',
//         fontFamily: fonts.medium,
//     },
//     bgGray: {
//         backgroundColor: '#9AA4B2',
//     },
//     bgPink: {
//         backgroundColor: COLOR.theme
//     },
//     }
// );
