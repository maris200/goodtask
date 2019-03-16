import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from "react-native";
import colors from '../../../../theme/colors/Colors';
import { Text } from 'native-base';
import styles from './style'; 

class Account extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <TouchableOpacity>
                <Text style={styles.account}>{this.props.text}</Text>
            </TouchableOpacity>

        );
    }
}

export default Account;
