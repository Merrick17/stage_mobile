import {StyleSheet, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Layout, Button, Card, Text} from '@ui-kitten/components';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import {participateAtOffer} from '../redux/actions/offer.actions';
const OffreCom = ({item}) => {
  useEffect(() => {
    console.log('Item', item);
  }, [item]);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();
  const {userInfo, token} = useSelector(state => state.auth);
  const handleError = err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };
  const handleDocument = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      });
      //setResult([pickerResult]);
      const formData = new FormData();

      formData.append('resume', pickerResult);
      formData.append('offre', item._id);
      formData.append('sendedBy', userInfo._id);
      dispatch(participateAtOffer(formData, token));
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <>
      <Card
        style={styles.card}
        status="info"
        header={() => {
          return (
            <View style={{padding: 10}}>
              <Text category="h6">{item && item.title}</Text>
              <Text category="s1">
                Ajouter par: {item && item.addedBy && item.addedBy.nomSte}
              </Text>
            </View>
          );
        }}
        footer={() => {
          return (
            <View style={styles.footerContainer}>
              <Button
                style={styles.footerControl}
                size="small"
                onPress={handleDocument}>
                Postuler
              </Button>
            </View>
          );
        }}>
        <Text>{item && item.description}</Text>
      </Card>
    </>
  );
};

export default OffreCom;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginVertical: 20,
    width: Dimensions.get('screen').width * 0.9,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  footerControl: {
    marginHorizontal: 2,
    width: '50%',
  },
  btnStyle: {
    width: '100%',
  },
});
