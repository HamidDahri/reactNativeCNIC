import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const CardBtn = ({
  onPress,
  icon: IconComponent,
  title,
  description,
  guidelines,
}) => {
  return (
    <TouchableOpacity style={styles.cardBtn} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent && <IconComponent />}
        <View style={{flex: 1}}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDes}>{description}</Text>
        </View>
      </View>
      <View style={{paddingTop: 12}}>
        {guidelines.map((item, index) => (
          <View key={index} style={{marginBottom: 10}}>
            <Text style={styles.guidelineText}>{`• ${item}`}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardBtn: {
    borderWidth: 2,
    borderColor: '#E3E8EF',
    borderRadius: 12,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    color: 'black',
  },
  cardDes: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily:
    lineHeight: 20,
    flex: 1,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
    borderBottomColor: '#E9EAEB',
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
  guidelineText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#4B5565',
  },
});

export default CardBtn;
