import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../theme/colors/Colors';
const { height, width } = Dimensions.get('window')

export default  StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
        height: height
    },
    cardRed: {
        borderLeftWidth: 6.17,
        borderLeftColor: colors.red,
        marginBottom: 8,
    },
    cardYellow: {
        borderLeftWidth: 6.17,
        borderLeftColor: colors.yellow,
        marginBottom: 8,
    },
    cardGreen: {
        borderLeftWidth: 6.17,
        borderLeftColor: colors.green,
        marginBottom: 8,
    },
    thumb: {
        marginBottom: 13.5,
    },
    title: {
        color: colors.gray,
        marginLeft: 16,
        fontSize: 18,
        textAlign: 'left',
        marginTop: 30,
        marginBottom: 16.5
        //fontFamily: 'Montserrat-Bold',
    },
    textTask: {
        color: colors.gray,
        fontSize: 10,
        textAlign: 'left',
        //fontFamily: 'Montserrat-Regular',
    },
    textType: {
        color: colors.gray,
        fontSize: 18,
        textAlign: 'left',
        marginTop: 4,
        //fontFamily: 'Montserrat-Medium',
    },
    text: {
        color: colors.gray,
        fontSize: 10,
        textAlign: 'left',
        marginTop: 23.5,
        //fontFamily: 'Montserrat-Regular',
    },
    textDate: {
        color: colors.gray,
        fontSize: 10,
        textAlign: 'left',
        marginTop: 1,
        //fontFamily: 'Montserrat-Regular',
    },
    textHour: {
        color: colors.gray,
        fontSize: 10,
        textAlign: 'left',
        marginLeft: 4,
        marginTop: 1,
        //fontFamily: 'Montserrat-Regular',
    },
    view: {
        flexDirection: 'row',
    },
    cardDialoOne: {
        paddingLeft: 20,
    },
    titleDialogOne: {
        color: colors.gray,
        fontSize: 18,
        textAlign: 'left',
        marginTop: 17,
        //fontFamily: 'Montserrat-Bold',
    },
    textSmallDialog: {
        color: colors.gray,
        fontSize: 10,
        textAlign: 'left',
        marginTop: 12.5
        //fontFamily: 'Montserrat-Regular',
    },
    textLargeDialog: {
        color: colors.gray,
        fontSize: 18,
        textAlign: 'left',
        marginTop: 11,
        //fontFamily: 'Montserrat-Medium',
    },
    textDate: {
        color: colors.gray,
        fontSize: 10,
        textAlign: 'left',
        marginTop: 1,
        //fontFamily: 'Montserrat-Regular',
    },
    textHour: {
        color: colors.gray,
        fontSize: 10,
        textAlign: 'left',
        marginLeft: 4,
        marginTop: 1,
        //fontFamily: 'Montserrat-Regular',
    },
    viewDialogOne: {
        flexDirection: 'row',
        marginTop: 5,
    },
    imageTwoDialogOne: {
        marginLeft: 9
    },
    buttonRoundedDialogOne: {
        width: 73,
        height: 22,
        borderColor: colors.blue,
        borderRadius: 10,
        borderWidth: 0.5,
        justifyContent: 'space-around',
    },
    buttonBlockDialogOne: {
        backgroundColor: colors.blue
    },
    textButtonRoundedDialogOne: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 10
        //fontFamily: 'Montserrat-Bold',
    },
    textButtonBlockDialogOne: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 10
        //fontFamily: 'Montserrat-Regular',
    },
    textCancelDialogOne: {
        color: colors.gray,
        fontSize: 15,
        textAlign: 'left',
        marginTop: 11,
        marginRight: 10,
        marginLeft: 17.57,
        justifyContent: 'space-around',
        //fontFamily: 'Montserrat-Medium',
    },
    inputPurpleDialogOne: {
        borderRadius: 3,
        borderColor: colors.purple,
        borderWidth: 0.5,
        marginTop: 11,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputGrayDialogOne: {
        borderRadius: 3,
        borderColor: colors.border,
        borderWidth: 0.5,
        marginTop: 11,
        marginLeft: 10.43,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputDialogOne: {
        color: colors.gray,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 11,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 3,
        paddingBottom: 3,
        //fontFamily: 'Montserrat-Medium',
    },
    switchDialogOne: {
        width: 37,
        height: 13,
        marginTop: 5,
        marginRight: 19.67,
    },
    textDialogTwo: {
        color: colors.gray,
        fontSize: 18,
        marginTop: 11
        //fontFamily: 'Montserrat-Medium',
    },
    imageBeerDialoTwo: {
        resizeMode: 'contain',
        height: 62.97,
        width: 87.06,
        marginTop: 20

    },
    buttonBlockDialogTwo: {
        backgroundColor: colors.blue,
        height: 50,
        marginTop: 20,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewDiaLogTwo: {
        backgroundColor: colors.white,
        flex: 1,
        marginTop: 200,
        marginBottom: 350,

    }
});