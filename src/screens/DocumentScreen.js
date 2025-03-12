/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useCallback, useMemo} from 'react';
import GovtID from '../Assests/svg/GovtID';
import Passport from '../Assests/svg/Passport';
import CardBtn from '../components/CardBtn';
import TitleDescription from '../components/TitleDescription';
import BtnBack from '../Assests/svg/BtnBack';

export default function HomeScreen(props) {
  const goToCardScreen = useCallback(
    data => {
      console.log('Navigating to Card Screen with data:', data);
      props.navigation.navigate('Card', {...data});
    },
    [props.navigation],
  );

  const govtIDGuidelines = useMemo(
    () => [
      'Upload both front and back sides.',
      'Make sure all text is visible and not blurry.',
      'Avoid reflections and shadows.',
    ],
    [],
  );
  const passportGuidelines = useMemo(
    () => [
      'Ensure the passport number, name, and date of birth are clearly readable.',
      'Do not cover any part of the document.',
      'Place on a flat surface with good lighting.',
    ],
    [],
  );

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <BtnBack height={24} width={24} />
      </TouchableOpacity>
      <ScrollView>
        <TitleDescription
          title={'Submit documents'}
          description={
            'Just a quick check! Please share any of the documents below to complete your account setup.'
          }
        />
        <View style={{gap: 12}}>
          <CardBtn
            onPress={() =>
              goToCardScreen({
                title: 'Government ID',
                description:
                  '(Driver’s License, National ID, or Residence Permit)',
                guidelines: govtIDGuidelines,
              })
            }
            icon={GovtID}
            title="Government ID"
            description="(Driver’s License, National ID, or Residence Permit)"
            guidelines={govtIDGuidelines}
          />
          <CardBtn
            onPress={() =>
              goToCardScreen({
                title: 'Passport',
                description:
                  'Must include the page with your photo and details)',
                guidelines: passportGuidelines,
              })
            }
            icon={Passport}
            title="Passport"
            description="(Must include the page with your photo and details)"
            guidelines={passportGuidelines}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    borderBottomColor: '#E3E8EF',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  backButton: {
    alignItems: 'center',
    height: 36,
    justifyContent: 'center',
    marginRight: 8,
    width: 36,
  },
});
