import {DefaultNavigationProps, User} from "../../types";
import {IC_MASK} from "../../utils/Icons";
import React from "react";
import {getString} from "../../../STRINGS";
import styled from "styled-components/native";
import {useAppContext} from "../../providers/AppProvider";
import {useThemeContext} from "../../providers/ThemeProvider";
import {DrawerActions} from "@react-navigation/routers";
import {StyleSheet, TouchableOpacity} from "react-native";
import * as NavigationService from "../navigation/NavigationService";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Drawer,
  Title
} from "native-base";
import {CommonActions} from "@react-navigation/core";
import AsyncStorage from "@react-native-community/async-storage";

function HeaderScreen(props : Props): React.ReactElement {
  let timer: number;
  const {previous, title, navigation} = props;
  const {state, setUser} = useAppContext();
  const {changeThemeType} = useThemeContext();
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

  return (<Header>
    <Left>
      {
        previous
          ? (<Button transparent={true} onPress={navigation.goBack}>
            <Icon name="arrow-back"/>
          </Button>)
          : (undefined)
      }
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      <Button transparent={true} onPress={navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name="menu"/>
      </Button>
    </Right>
  </Header>);
}

export default HeaderScreen;
