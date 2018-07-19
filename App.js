import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Test from './Test';
import FadeInView from './FadeInView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>VITA;island</Text> */}
        <FadeInView style={{ width: 250, height: 55, backgroundColor: 'powderblue' }}>
          <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>VITA;island</Text>
        </FadeInView>
        <Image source={require('./images/island.jpg')} style={{ height: 500 }} />
        <Test/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
