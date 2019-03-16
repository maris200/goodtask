import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window')

export default  StyleSheet.create({

    background: {
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
    },
});