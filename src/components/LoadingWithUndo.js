import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Retake from '../Assests/svg/Retake';
// import {COLOR} from '../../styles/Constant';
// import { Fonts } from '../../styles/fonts';

const LoadingWithUndo = ({onUndo}) => {
  return (
    <View style={styles.overlayContainer}>
      <View style={styles.overlayBackground} />
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} color={'#FC1267'} />
        <Text style={styles.deletingText}>Submitting for approval...</Text>
      </View>
      {onUndo && (
        <TouchableOpacity style={styles.undoBtn} onPress={onUndo}>
          <Retake stroke={'#FC1267'} />
          <Text style={styles.undoText}>Undo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  overlayBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loaderContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    // borderRadius: 20,
    height: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deletingText: {
    color: '#344054',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    // fontFamily: Fonts.Poppins600,
    marginTop: 12,
  },
  undoBtn: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 68,
    position: 'absolute',
    bottom: '8%',
    width: 142,
    justifyContent: 'center',
  },
  undoText: {
    fontSize: 16,
    color: '#344054',
    fontWeight: '600',
    // fontFamily: Fonts.Poppins600,
  },
});

export default LoadingWithUndo;
