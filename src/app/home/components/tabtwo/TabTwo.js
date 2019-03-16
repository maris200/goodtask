import React, { Component } from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Card, List, ListItem, Left, Thumbnail, Body, Text, Right, Fab, Icon, Container, Content, CardItem, Footer, FooterTab, Switch, Button } from 'native-base';

import Modal from 'react-native-modal';
import ActionButton from 'react-native-action-button';
import colors from '../../../../theme/colors/Colors';
import variable from '../../../../theme/global/variable';

const { height, width } = Dimensions.get('window')
import styles from './style'; 

class TabTwo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOneVisible: false,
            isModalTwoVisible: false,
            colorFalseSwitchIsOn: true,
        };
    }

    _toggleModalOne = () => {
        this.setState({ isModalOneVisible: !this.state.isModalOneVisible });
    };

    _toggleModalTwo = () => {
        this.setState({ isModalTwoVisible: !this.state.isModalTwoVisible });
    };

    render() {

        return (
            <Container>
                <Content padder>
                    <View>
                        <Modal isVisible={this.state.isModalOneVisible}>
                            <Card>
                                <View>
                                    <Modal isVisible={this.state.isModalTwoVisible}>
                                        <View style={styles.viewDiaLogTwo}>
                                            <ScrollView>
                                                <Body>
                                                    <Image source={require('../../../../assets/images/beer.png')} style={styles.imageBeerDialoTwo} />
                                                </Body>

                                                <Body>
                                                    <Text style={styles.textDialogTwo}>{variable.MODAL_successfully}</Text>
                                                </Body>

                                                <Body>
                                                    <Button primary style={styles.buttonBlockDialogTwo} onPress={this._toggleModalTwo}>
                                                        <Text>{variable.MODAL_ok}</Text>
                                                    </Button>
                                                </Body>
                                            </ScrollView>
                                        </View>
                                    </Modal>
                                </View>
                                <CardItem bordered style={styles.cardDialoOne}>
                                    <Body>
                                        <Text style={styles.titleDialogOne}>{variable.MODAL_new}</Text>
                                    </Body>
                                </CardItem>
                                <CardItem bordered style={styles.cardDialoOne}>
                                    <Body>
                                        <Text style={styles.textSmallDialog}>{variable.MODAL_task}</Text>
                                        <Text style={styles.textLargeDialog}>{variable.MODAL_design}</Text>
                                    </Body>
                                </CardItem>
                                <CardItem bordered style={styles.cardDialoOne}>
                                    <Body>
                                        <Text style={styles.textSmallDialog}>{variable.MODAL_member}</Text>
                                        <View style={styles.viewDialogOne}>
                                            <Thumbnail small size={36} source={require('../../../../assets/images/thubTaskTwo.png')} />
                                            <Thumbnail small size={36} source={require('../../../../assets/images/thubTaskOne.png')} style={styles.imageTwoDialogOne} />
                                            <Right>
                                                <TouchableOpacity style={styles.buttonRoundedDialogOne}>
                                                    <Text style={styles.textButtonRoundedDialogOne}>{variable.MODAL_add_member}</Text>
                                                </TouchableOpacity>
                                            </Right>

                                        </View>
                                    </Body>
                                </CardItem>
                                <CardItem bordered style={styles.cardDialoOne}>
                                    <Body>
                                        <Text style={styles.textSmallDialog}>{variable.MODAL_deadline}</Text>
                                        <View style={styles.viewDialogOne}>
                                            <TouchableOpacity style={styles.inputPurpleDialogOne}>
                                                <Text style={styles.textInputDialogOne}>{variable.MODAL_date}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.inputGrayDialogOne}>
                                                <Text style={styles.textInputDialogOne}>{variable.MODAL_hour}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Body>
                                    <Right>
                                        <Switch
                                            onValueChange={(value) => this.setState({ colorFalseSwitchIsOn: value })}
                                            onTintColor={colors.blue}
                                            style={styles.switchDialogOne}
                                            thumbTintColor={colors.white}
                                            tintColor={colors.gray}
                                            value={this.state.colorFalseSwitchIsOn} />
                                    </Right>
                                </CardItem>
                                <CardItem bordered style={styles.cardDialoOne}>
                                    <Body />
                                    <Right>
                                        <View style={styles.viewDialogOne}>
                                            <TouchableOpacity onPress={this._toggleModalOne} >
                                                <Text style={styles.textCancelDialogOne}>{variable.MODAL_cancel}</Text>
                                            </TouchableOpacity>
                                            <Button primary style={styles.buttonBlockDialogOne} onPress={this._toggleModalTwo} >
                                                <Text>{variable.MODAL_confirm}</Text>
                                            </Button>
                                        </View>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Modal>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>{variable.ALLTASKS_title}</Text>
                        <Card style={styles.cardRed}>
                            <List noBorder>
                                <ListItem
                                    avatar
                                    noBorder>
                                    <Left>
                                        <Thumbnail source={require('../../../../assets/images/thubTaskOne.png')} style={styles.thumb} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.textTask}>{variable.ALLTASKS_task01}</Text>
                                        <Text style={styles.textType}>{variable.ALLTASKS_wireframes}</Text>
                                    </Body>
                                    <Right>
                                        <Text style={styles.text}>{variable.ALLTASKS_deadline}</Text>
                                        <View style={styles.view}>
                                            <Text style={styles.textDate}>{variable.ALLTASKS_date}</Text>
                                            <Text style={styles.textHour}>{variable.ALLTASKS_hour}</Text>
                                        </View>
                                    </Right>
                                </ListItem>
                            </List>
                        </Card>
                        <Card style={styles.cardYellow}>
                            <List noBorder>
                                <ListItem
                                    avatar
                                    noBorder>

                                    <Left>
                                        <Thumbnail source={require('../../../../assets/images/thubTaskTwo.png')} style={styles.thumb} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.textTask}>{variable.ALLTASKS_task02}</Text>
                                        <Text style={styles.textType}>{variable.ALLTASKS_redesign}</Text>
                                    </Body>
                                    <Right>
                                        <Text style={styles.text}>{variable.ALLTASKS_deadline}</Text>
                                        <View style={styles.view}>
                                            <Text style={styles.textDate}>{variable.ALLTASKS_date}</Text>
                                            <Text style={styles.textHour}>{variable.ALLTASKS_hour}</Text>
                                        </View>
                                    </Right>
                                </ListItem>
                            </List>
                        </Card>
                        <Card style={styles.cardGreen}>
                            <List noBorder>
                                <ListItem
                                    avatar
                                    noBorder>

                                    <Left>
                                        <Thumbnail source={require('../../../../assets/images/thubTaskTree.png')} style={styles.thumb} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.textTask}>{variable.ALLTASKS_task03}</Text>
                                        <Text style={styles.textType}>{variable.ALLTASKS_site}</Text>
                                    </Body>
                                    <Right>
                                        <Text style={styles.text}>{variable.ALLTASKS_deadline}</Text>
                                        <View style={styles.view}>
                                            <Text style={styles.textDate}>{variable.ALLTASKS_date}</Text>
                                            <Text style={styles.textHour}>{variable.ALLTASKS_hour}</Text>
                                        </View>
                                    </Right>
                                </ListItem>
                            </List>
                        </Card>
                        <Card style={styles.cardRed}>
                            <List noBorder>
                                <ListItem
                                    avatar
                                    noBorder>

                                    <Left>
                                        <Thumbnail source={require('../../../../assets/images/thubTaskOne.png')} style={styles.thumb} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.textTask}>{variable.ALLTASKS_task04}</Text>
                                        <Text style={styles.textType}>{variable.ALLTASKS_infographic}</Text>
                                    </Body>
                                    <Right>
                                        <Text style={styles.text}>{variable.ALLTASKS_deadline}</Text>
                                        <View style={styles.view}>
                                            <Text style={styles.textDate}>{variable.ALLTASKS_date}</Text>
                                            <Text style={styles.textHour}>{variable.ALLTASKS_hour}</Text>
                                        </View>
                                    </Right>
                                </ListItem>
                            </List>
                        </Card>
                        <Card style={styles.cardRed}>
                            <List noBorder>
                                <ListItem
                                    avatar
                                    noBorder>
                                    <Left>
                                        <Thumbnail source={require('../../../../assets/images/thubTaskFive.png')} style={styles.thumb} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.textTask}>{variable.ALLTASKS_task05}</Text>
                                        <Text style={styles.textType}>{variable.ALLTASKS_interface}</Text>
                                    </Body>
                                    <Right>
                                        <Text style={styles.text}>{variable.ALLTASKS_deadline}</Text>
                                        <View style={styles.view}>
                                            <Text style={styles.textDate}>{variable.ALLTASKS_date}</Text>
                                            <Text style={styles.textHour}>{variable.ALLTASKS_hour}</Text>
                                        </View>
                                    </Right>
                                </ListItem>
                            </List>
                            <View>
                                <ActionButton onPress={this._toggleModalOne} buttonColor={colors.purple} btnOutRange={colors.white} degrees={135} offsetY={15} bgColor='white' position="right" />
                            </View>
                        </Card>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default TabTwo;
