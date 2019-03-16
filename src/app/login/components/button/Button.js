import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Text } from 'native-base';
import colors from '../../../../theme/colors/Colors';
import { Actions } from 'react-native-router-flux';
import styles from './style'; 

class Button extends Component {

    constructor(props) {
        super(props);

    }

    openHome() { Actions.home(); }
    render() {

        return (
            <TouchableOpacity style={styles.button} onPress={() => this.openHome()}>
                <Text style={styles.buttonText}>{this.props.action}</Text>
            </TouchableOpacity>

        );
    }
}

export default Button;
