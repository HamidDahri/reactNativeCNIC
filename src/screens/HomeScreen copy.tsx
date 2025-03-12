/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import GovtID from '../Assests/svg/GovtID';
import Passport from '../Assests/svg/Passport';
import CardBtn from '../components/CardBtn';
import TitleDescription from '../components/TitleDescription';
import BtnBack from '../Assests/svg/BtnBack';
interface HomeScreenProps {
  route: any;
  navigation: any;
}

export default function HomeScreen(props: HomeScreenProps) {
  // const goToCardScreen = () => {
  //   console.log('goToCardScreen');
  //   props.navigation.navigate('Card');
  // };

  const goToCardScreen = (
    data:
      | {title: string; description: string; guidelines: string[]}
      | undefined,
  ) => {
    console.log('Navigating to Card Screen with data:', data);
    props.navigation.navigate('Card', {...data});
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <BtnBack height={24} width={24} />
      </TouchableOpacity>
      <ScrollView style={''}>
        <TitleDescription
          title={'Submit documents'}
          description={
            'Just a quick check! Please share any of the documents below to complete your account setup.'
          }
          value={undefined}
        />
        <View style={{gap: 12}}>
          <CardBtn
            onPress={() =>
              goToCardScreen({
                title: 'Government ID',
                description:
                  '(Driver’s License, National ID, or Residence Permit)',
                guidelines: [
                  'Upload both front and back sides.',
                  'Make sure all text is visible and not blurry.',
                  'Avoid reflections and shadows.',
                ],
              })
            }
            icon={GovtID}
            title="Government ID"
            description="(Driver’s License, National ID, or Residence Permit)"
            guidelines={[
              'Upload both front and back sides.',
              'Make sure all text is visible and not blurry.',
              'Avoid reflections and shadows.',
            ]}
          />
          <CardBtn
            onPress={() =>
              goToCardScreen({
                title: 'Passport',
                description:
                  'Must include the page with your photo and details)',
                guidelines: [
                  'Ensure the passport number, name, and date of birth are clearly readable.',
                  'Do not cover any part of the document.',
                  'Place on a flat surface with good lighting.',
                ],
              })
            }
            icon={Passport}
            title="Passport"
            description="(Must include the page with your photo and details)"
            guidelines={[
              'Ensure the passport number, name, and date of birth are clearly readable.',
              'Do not cover any part of the document.',
              'Place on a flat surface with good lighting.',
            ]}
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
