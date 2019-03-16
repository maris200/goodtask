import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Form, Item, Input, Label, } from 'native-base';
import colors from '../../../../theme/colors/Colors';
import styles from './style'; 

const { height, width } = Dimensions.get('window')

class FormLogin extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Form style={styles.form}>
                <Item floatingLabel>
                    <Label style={styles.label}>{this.props.login}</Label>
                    <Input style={styles.input} />
                </Item>
                <Item floatingLabel style={styles.item}>
                    <Label style={styles.label}>{this.props.pass}</Label>
                    <Input style={styles.input} secureTextEntry={true} />
                </Item>
            </Form>
        );
    }
}

export default FormLogin;
