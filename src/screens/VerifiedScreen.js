import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Verify from '../Assests/svg/Verify';
import YFFButton, {YFFButtonTypes} from '../components/YFFButton';
import {useNavigation} from '@react-navigation/native';

const VerifiedScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Verify />
        <View>
          <Text style={styles.title}>Document Submitted!</Text>
          <Text style={styles.description}>
            We’ve received your document and sent it for approval. This may take
            some time. Once reviewed, we’ll notify you via email and push
            notification.
          </Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <YFFButton
          onPress={() => navigation.goBack()}
          title={'Go Back'}
          type={YFFButtonTypes.theme}
        />
      </View>
    </View>
  );
};

export default VerifiedScreen;
const styles = StyleSheet.create({
  btnContainer: {marginTop: 'auto', marginBottom: 0, width: '100%'},
  container: {
    paddingHorizontal: 12,
    borderBottomColor: '#E3E8EF',
    borderBottomWidth: 1,
    paddingVertical: 12,
    flex: 1,
  },
  description: {
    color: '#4B5565',
    fontSize: 14,
    fontWeight: '400',
    // fontFamily:
    lineHeight: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    // fontFamily:
    fontWeight: '600',
    color: '#000000',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
});
