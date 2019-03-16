import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../theme/colors/Colors';

const { height, width } = Dimensions.get('window')

export default  StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        height: height
    },
    header: {
        backgroundColor: colors.purple,
    },
    menu: {
        marginLeft: 22,
        marginTop: 28,
        marginBottom: 31,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        marginLeft: 0
    },
    left:{
        marginRight: 0
    },
    text: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'left',
        marginLeft: 0
        //fontFamily: 'Montserrat-Regular',
    },
    tabContainer:{
        height: 10,
        borderWidth: 0,
    },
    tabs:{
        backgroundColor: colors.white
    },
    tabActive: {
        backgroundColor: colors.blue, 
        borderColor: colors.blue, 
        borderBottomWidth: 0 
    },
});