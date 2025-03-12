import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {Fonts, fonts} from '../../styles/fonts';

const TitleDescription = ({title, description, value}) => {
  return (
    <View>
      {title && (
        <Text style={title.length > 1 ? styles.heading : {}}>{title}</Text>
      )}
      {description && (
        <Text style={description.length > 1 ? styles.subHeading : {}}>
          {description}
        </Text>
      )}
      {value && <Text style={styles.value}>{value}</Text>}
    </View>
  );
};

export default TitleDescription;

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    // marginLeft: 20,
    fontWeight: '600',
    fontSize: 24,
    color: '#000000',
    marginBottom: 10,
    // fontFamily: Fonts.Poppins600,
  },
  subHeading: {
    // marginTop: 10,
    // marginLeft: 20,
    // marginRight: 20,
    fontWeight: '400',
    fontSize: 14,
    color: '#4B5565',
    marginBottom: 30,
    // fontFamily: Fonts.Poppins400,
  },
  value: {
    // marginLeft: 20,
    // marginRight: 20,
    fontWeight: '600',
    fontSize: 14,
    color: '#4B5565',
    marginBottom: 20,
    // fontFamily: Fonts.Poppins600,
  },
});
