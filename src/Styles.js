import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 50,
    },
    imageViewerContainer: {
        backgroundColor: Colors.lighter,
        height: '100%',
        marginTop: 50,
        padding: 5,
    },
    imageContainer: {
        height: '90%',
    },
    image: {
        margin: 5,
        width: '50%',
        height: 150,
    },
    button: {
        width: 180,
        height: 60,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
    },
 buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
});
