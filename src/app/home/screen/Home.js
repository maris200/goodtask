import React, { Component } from 'react';
import { View, Image } from "react-native";
import { Tab, Tabs, Header, Title, Left, Body, Right, Thumbnail } from 'native-base';
import Tab1 from '../components/tabone/TabOne';
import Tab2 from '../components/tabtwo/TabTwo';
import styles from './style';
import colors from '../../../theme/colors/Colors';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.disableYellowBox = true;
        
        return (
            <View>
                <Header style={styles.header}>
                    <Left style={styles.left}>
                        <Image source={require('../../../assets/images/menu.png')} style={styles.menu} />
                    </Left>
                    <Body style={styles.body}>
                        <Title style={styles.text}>Hello!</Title>
                    </Body>
                    <Right>
                        <Thumbnail small source={require('../../../assets/images/thumb.png')} />
                    </Right>
                </Header>

                <View style={styles.container}>
                    <Tabs tabContainerStyle={styles.tabContainer}>
                        <Tab
                            heading=""
                            tabStyle={styles.tabs}
                            activeTabStyle={styles.tabActive}>
                            <Tab1 />
                        </Tab>

                        <Tab
                            heading=""
                            tabStyle={styles.tabs}
                            activeTabStyle={styles.tabActive}>
                            <Tab2 />
                        </Tab>
                    </Tabs>
                </View>
            </View>
        );
    }
}

