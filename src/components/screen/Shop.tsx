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
        }
      ];

      const renderRow = (rowData, sectionId, index) => {
        // rowData contains grouped data for one row,
        // so we need to remap it into cells and pass to GridRow
        if (rowData.length == "1") {
          return (<TouchableOpacity key={index}>
            <ImageBackground styleName="large" source={{
                uri: rowData[0].image.url
              }}>
              <Tile>
                <Title styleName="md-gutter-bottom">{rowData[0].name}</Title>
                <Subtitle styleName="sm-gutter-horizontal">
                  {rowData[0].address}
                </Subtitle>
              </Tile>
            </ImageBackground>
            <Divider styleName="line"/>
          </TouchableOpacity>);
        }

        const cellViews = rowData.map((restaurant, id) => {
          return (<TouchableOpacity key={id} styleName="flexible">
            <Card styleName="flexible">
              <Image styleName="medium-wide" source={{
                  uri: restaurant.image.url
                }}/>
              <View styleName="content">
                <Subtitle numberOfLines={3}>{restaurant.name}</Subtitle>
                <View styleName="horizontal">
                  <Caption styleName="collapsible" numberOfLines={2}>
                    {restaurant.address}
                  </Caption>
                </View>
              </View>
            </Card>
          </TouchableOpacity>);
        });

        return <GridRow columns={2}>{cellViews}</GridRow>;
      };

      // const restaurants = this.state.restaurants;
      // Group the restaurants into rows with 2 columns, except for the
      // first restaurant. The first restaurant is treated as a featured restaurant
      let isFirstArticle = true;
      const groupedData = GridRow.groupByRows(restaurants, 2, () => {
        if (isFirstArticle) {
          isFirstArticle = false;
          return 2;
        }
        return 1;
      });

      return (<Screen>
        <ListView data={groupedData} renderRow={renderRow}/>
      </Screen>);
    }

    export default Home;
