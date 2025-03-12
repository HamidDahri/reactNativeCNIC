/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import GovtID from '../Assests/svg/GovtID';
import CrossBtn from '../Assests/svg/CrossBtn';
import BtnBack from '../Assests/svg/BtnBack';
import LoadingWithUndo from '../components/LoadingWithUndo';
import YFFButton, {YFFButtonTypes} from '../components/YFFButton';

interface CardScreenProps {
  route: any;
  navigation: any;
}

export default function CardScreen(props: CardScreenProps) {
  const isFrontRef = useRef(false);
  const [frontImageBase64, setFrontImageBase64] = useState('');
  const [backImageBase64, setBackImageBase64] = useState('');

  const {title, description, guidelines} = props.route.params;

  const goToCameraScreen = (isFront: boolean) => {
    isFrontRef.current = isFront;
    props.navigation.navigate('Camera');
  };

  const Card = (props: {isFront: boolean}) => {
    let base64;
    if (props.isFront) {
      base64 = frontImageBase64;
    } else {
      base64 = backImageBase64;
    }
    let innerControl;
    if (!base64) {
      innerControl = (
        <TouchableOpacity
          onPress={() => {
            goToCameraScreen(props.isFront);
          }}
          style={styles.buttonContainer}>
          <GovtID width={75} height={59} />
          {props.isFront ? (
            <View>
              <Text style={styles.title}>Front Side of ID</Text>
              <Text style={styles.des}>
                <Text style={styles.bold}>Click</Text> to upload or capture the
                picture
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.title}>Back Side of ID</Text>
              <Text style={styles.des}>
                <Text style={styles.bold}>Click</Text> to upload or capture the
                picture
              </Text>
            </View>
          )}
        </TouchableOpacity>
      );
    } else {
      innerControl = (
        <View
          style={{
            marginBottom: 12,
            position: 'relative',
            marginHorizontal: 12,
            // backgroundColor: 'red',
            borderRadius: 12,
          }}>
          <Pressable
            style={styles.crossBtn}
            onPress={() => {
              goToCameraScreen(props.isFront);
            }}>
            <CrossBtn />
          </Pressable>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'data:image/jpeg;base64,' + base64,
            }}></Image>
        </View>
      );
    }
    return <>{innerControl}</>;
  };
  useEffect(() => {
    if (props.route.params?.base64) {
      let base64 = props.route.params?.base64;
      if (isFrontRef.current === true) {
        setFrontImageBase64(base64);
        console.log(base64, 'FrontBase64');
      } else {
        setBackImageBase64(base64);
        // recognizeIDCard(base64);
      }
    }
  }, [props.route.params?.base64]);

  const [isLoading, setIsLoading] = useState(false);
  const handleContinue = () => {
    setIsLoading(true);

    setTimeout(() => {
      props.navigation.navigate('VerifiedScreen');
      setIsLoading(false);
    }, 5000);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <BtnBack height={24} width={24} />
      </TouchableOpacity>
      <ScrollView style={{flex: 1}}>
        <View style={{marginBottom: 12}}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDes}>{description}</Text>
          <View style={{paddingTop: 12}}>
            {guidelines.map((item: any, index: number) => (
              <View key={index} style={{marginBottom: 10}}>
                <Text style={styles.guidelineText}>{`• ${item}`}</Text>
              </View>
            ))}
          </View>
        </View>
        {Card({isFront: true})}
        {Card({isFront: false})}
        <YFFButton
          title={'Continue'}
          type={YFFButtonTypes.theme}
          showEnable={frontImageBase64 && backImageBase64}
          onPress={handleContinue}
        />
      </ScrollView>
      {isLoading && <LoadingWithUndo onUndo={undefined} />}
    </View>
  );
}

const styles = StyleSheet.create({
  crossBtn: {
    position: 'absolute',
    top: -10,
    end: -10,
    zIndex: 1,
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
  guidelineText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#4B5565',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    // fontFamily:
    lineHeight: 24,
    textAlign: 'center',
  },
  des: {
    fontSize: 14,
    lineHeight: 16,
    // fontFamily:
    fontWeight: '600',
    textAlign: 'center',
  },
  bold: {
    fontWeight: '600',
    // fontFamily:
  },
  mainContainer: {
    padding: 16,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backButton: {
    alignItems: 'center',
    height: 36,
    justifyContent: 'center',
    marginRight: 8,
    width: 36,
  },

  buttonContainer: {
    borderWidth: 2,
    borderColor: '#E3E8EF',
    borderRadius: 12,
    padding: 24,
    backgroundColor: '#F8FAFC',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 12,
  },
  cardImage: {
    height: 204,
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 12,
  },
});
