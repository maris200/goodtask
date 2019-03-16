import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../theme/colors/Colors';
const { height, width } = Dimensions.get('window')

export default  StyleSheet.create({

    label: {
        fontSize: 20,
        textAlign: 'left',
        color: colors.white,
        //fontFamily: 'Montserrat-Regular',
    },
    input: {
        color: colors.white,
    },
    item: {
        marginTop: 10
    },
    form: {
        width: width - 40,
        marginLeft: 0,
    },

});