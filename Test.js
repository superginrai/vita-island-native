import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Button, AlertIOS } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  render() {

    const AlertExample = () => {
      AlertIOS.prompt(
        'Search for Games',
        'Gosh darn it you better only search for VITA games.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Go!',
            onPress: (searchGame) => searchAPI(searchGame),
          },
        ],
        'plain-text'
      );
    }

    const searchAPI = (searchGame) => {
      return fetch(`https://api-endpoint.igdb.com/games/?search=${searchGame}&fields=*`, {
        headers: {
          "user-key": "72bb7ce60b4626f158199825d65f9ffc",
          Accept: 'application/json',
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function () {

          });

        })
        .catch((error) => {
          console.error(error);
        });
    }

    // if (this.state.isLoading) {
    //   return (
    //     <View style={{ flex: 1, padding: 20 }}>
    //       <ActivityIndicator />
    //     </View>
    //   )
    // }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.name}, {item.url}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Button
          onPress={AlertExample}
          title="Search for Games"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}