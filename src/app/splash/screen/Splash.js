import React, { Component } from 'react';
import { ImageBackground, Image} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './style';

export default class Splash extends Component {

    constructor(props) {
        super(props);

        setTimeout(() => {
            Actions.reset("login");
        }, 1000);
    }

    render() {

        console.disableYellowBox = true;

        return (
                <ImageBackground source={require('../../../assets/images/background.png')} style={styles.background}>
                    <Image source={require('../../../assets/images/logo.png')} style={styles.logo}/>
                </ImageBackground>
        );
    }
}

