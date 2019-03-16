import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../theme/colors/Colors';

export default  StyleSheet.create({

    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.border,
        borderRadius: 10,
        borderWidth: 0.5,
        marginLeft: 10,
        width: 125,
        height: 125,
        flexDirection: 'column',
    },
    text:{
        color: colors.purple,
        fontSize: 10,
        textAlign: 'center',
        marginTop: 5,
        //fontFamily: 'Montserrat-Regular',
    }

});