import React, { Component } from 'react';
import { View, ImageBackground, Image } from "react-native";
import Form from '../components/form/Form';
import Button from '../components/button/Button';
import Account from '../components/account/Account';
import text from '../../../theme/global/variable';
import styles from './style';

export default class Login extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        console.disableYellowBox = true;

        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.background}>
                <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
                <View style={styles.view}>
                    <Form login={text.LOGIN_email} pass={text.LOGIN_password}/>
                    <Button action={text.LOGIN_action}/>
                    <Account text={text.LOGIN_dontAccount} />
                </View>
            </ImageBackground>
        );
    }
}

