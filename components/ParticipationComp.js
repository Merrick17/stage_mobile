import {StyleSheet, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Layout, Button, Card, Text} from '@ui-kitten/components';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import Pdf from 'react-native-pdf';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL} from '../utils/apiHelpers';
import {deleteParticipation} from '../redux/actions/participation.actions';
const ParticipationComp = ({item}) => {
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
  const handleDelete = () => {
    dispatch(deleteParticipation(userInfo._id, item._id, token));
  };
  const displayStatus = status => {
    switch (status) {
      case 'EN_COURS':
        return 'En cours';
      case 'CONFIRMED':
        return 'Confirmer';
      case 'REFUSED':
        return 'Refuser';
      default:
        return 'En Cours';
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
              <Text category="h6">
                {item && item.offre && item.offre.title}
              </Text>
              <Text category="s1">
                Etat: {item && displayStatus(item.confirmed)}
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
                status={'danger'}
                onPress={handleDelete}>
                Annuler
              </Button>
            </View>
          );
        }}>
        <Text>{item && item.offre && item.offre.description}</Text>
        <Pdf
          trustAllCerts={false}
          source={{uri: `${BASE_URL}/${item.resume}`}}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </Card>
    </>
  );
};

export default ParticipationComp;

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
    width: '100%',
  },
  btnStyle: {
    width: '100%',
  },
  pdf: {
    width: '100%',
    height: 300,
  },
});
