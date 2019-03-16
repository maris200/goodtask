import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../theme/colors/Colors';
const { height, width } = Dimensions.get('window')

export default  StyleSheet.create({

    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: colors.white,
        //fontFamily: 'Montserrat-Regular',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue,
        height: 50,
        width: width - 40,
        marginTop: '15%',
    },
});