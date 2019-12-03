import {DefaultNavigationProps, User} from "../../types";

import Button from "../shared/Button";
import {IC_MASK} from "../../utils/Icons";
import React from "react";
import {getString} from "../../../STRINGS";
import styled from "styled-components/native";
import {useAppContext} from "../../providers/AppProvider";
import {useThemeContext} from "../../providers/ThemeProvider";
import {DrawerActions} from "@react-navigation/routers";
import {StyleSheet, TouchableOpacity} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import {
  TextInput, Button as Btn, NavigationBar,
  // Icon,
  // Title,
  Spinner,
  Text,
  View,
  Screen,
  Image,
  ImageBackground
} from "@shoutem/ui";
import {CommonActions} from "@react-navigation/core";
import AsyncStorage from "@react-native-community/async-storage";

function DrawerScreen(props : Props): React.ReactElement {
  let timer: number;
  const {state, setUser} = useAppContext();
  const {changeThemeType} = useThemeContext();
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

  return (<TouchableOpacity onPress={() => {
      console.log("test1");
      props.navigation.dispatch(DrawerActions.openDrawer());
    }}>
    <Icon name="sidebar"/>
  </TouchableOpacity>);
}

export default DrawerScreen;
