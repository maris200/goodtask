import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { CardItem, Text } from 'native-base';
import styles from './style'; 

class Card extends Component {

    render() {

        return (
            <CardItem style={styles.card}>
                <Image source={this.props.imageUri} />
                <Text style={styles.text}>{this.props.type}</Text>
            </CardItem>
        );
    }
}

export default Card;