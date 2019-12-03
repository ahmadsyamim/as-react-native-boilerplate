import {DefaultNavigationProps, User} from "../../types";

import Button from "../shared/Button";
import {IC_MASK} from "../../utils/Icons";
import React from "react";
import {TouchableOpacity} from "react-native";
import {getString} from "../../../STRINGS";
import styled from "styled-components/native";
import {useAppContext} from "../../providers/AppProvider";
import {useThemeContext} from "../../providers/ThemeProvider";
import {
  TextInput,
  Button as Btn,
  NavigationBar,
  Icon,
  ListView,
  Spinner,
  Text,
  View,
  Screen,
  Image,
  Subtitle,
  Title,
  Tile,
  Divider,
  ImageBackground,
  GridRow,
  Card,
  Video,
  Caption,
  GridView
} from "@shoutem/ui";
import {CommonActions} from "@react-navigation/core";
import AsyncStorage from "@react-native-community/async-storage";

const resetAction = CommonActions.reset({
  index: 0,
  routes: [
    {
      name: "Temp"
    }
  ]
});

const ContainerFull = styled.View `
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
`;

const Container = styled.View `
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${ ({
  theme}): string => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

  const ContentWrapper = styled.View `
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

  const ButtonWrapper = styled.View `
  position: absolute;
  flex-direction: column;
  bottom: 40;
  width: 85%;
  align-self: center;
`;

  const StyledText = styled.Text `
  font-size: 18;
  line-height: 27;
  color: ${ ({
    theme}): string => theme.fontColor};
`;

    interface Props {
      navigation: DefaultNavigationProps<"Home">;
    }

    const authAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: "Intro"
        }
      ]
    });

    const homeAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: "Home"
        }
      ]
    });

    function Home(props : Props): React.ReactElement {
      let timer: number;
      const {state, setUser} = useAppContext();
      const {changeThemeType} = useThemeContext();
      const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

      let restaurants = [
        {
          name: "Gaspar Brasserie",
          address: "185 Sutter St, San Francisco, CA 94109",
          image: {
            url: "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
          }
        }, {
          name: "Chalk Point Kitchen",
          address: "527 Broome St, New York, NY 10013",
          image: {
            url: "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"
          }
        }, {
          name: "Kyoto Amber Upper East",
          address: "225 Mulberry St, New York, NY 10012",
          image: {
            url: "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"
          }
        }, {
          name: "Sushi Academy",
          address: "1900 Warner Ave. Unit A Santa Ana, CA",
          image: {
            url: "https://shoutem.github.io/static/getting-started/restaurant-4.jpg"
          }
        }, {
          name: "Sushibo",
          address: "35 Sipes Key, New York, NY 10012",
          image: {
            url: "https://shoutem.github.io/static/getting-started/restaurant-5.jpg"
          }
        }, {
          name: "Mastergrill",
          address: "550 Upton Rue, San Francisco, CA 94109",
          image: {
            url: "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"
          }
        }
      ];

      const renderRow = restaurant => {
        if (!restaurant) {
          return null;
        }

        return (<View>
          <ImageBackground styleName="large-banner" source={{
              uri: restaurant.image.url
            }}>
            <Tile>
              <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
              <Subtitle styleName="sm-gutter-horizontal">
                {restaurant.address}
              </Subtitle>
            </Tile>
          </ImageBackground>
          <Divider styleName="line"/>
        </View>);
      };

      return (<Screen>
        <ListView data={restaurants} renderRow={renderRow}/>
      </Screen>);
    }

    export default Home;
