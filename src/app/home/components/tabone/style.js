import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../theme/colors/Colors';
const { height, width } = Dimensions.get('window')

export default  StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        height: height
    },
    text: {
        color: colors.gray,
        marginLeft: 16,
        fontSize: 18,
        textAlign: 'left',
        marginTop: 30,
        //fontFamily: 'Montserrat-Bold',
    },
    viewCard: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
});