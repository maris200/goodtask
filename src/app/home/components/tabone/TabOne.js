import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Card from '../card/Card';
import variable from '../../../../theme/global/variable';
import colors from '../../../../theme/colors/Colors';
import ActionButton from 'react-native-action-button';
import styles from './style'; 


class TabOne extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View>
                <Text style={styles.text}>{variable.HOME_home}</Text>
                <View style={styles.viewCard}>
                    <Card
                        imageUri={require('../../../../assets/images/list.png')}
                        type={variable.HOME_task_list} />
                    <Card
                        imageUri={require('../../../../assets/images/page.png')}
                        type={variable.HOME_task_page} />
                </View>
                <View style={styles.viewCard}>
                    <Card
                        imageUri={require('../../../../assets/images/new.png')}
                        type={variable.HOME_new_task} />
                    <Card
                        imageUri={require('../../../../assets/images/progress.png')}
                        type={variable.HOME_task_progress} />
                </View>
                <View style={styles.viewCard}>
                    <Card
                        imageUri={require('../../../../assets/images/late.png')}
                        type={variable.HOME_late_task} />
                    <Card
                        imageUri={require('../../../../assets/images/comments.png')}
                        type={variable.HOME_comments} />
                </View>
                <View>
                    <ActionButton buttonColor={colors.purple} btnOutRange={colors.white} degrees={135} offsetY={15} bgColor='white' position="right" />
                </View>

            </View>
        );
    }
}

export default TabOne;
