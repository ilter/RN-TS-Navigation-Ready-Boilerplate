import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

interface Props {}

const HomeScreen:React.FunctionComponent<Props> = (props) => (
  <SafeAreaView>
    <Text>Screen: HomeScreen</Text>

    <TouchableHighlight onPress={() => props.navigation.navigate('Login')}>
      <Text>Go to Login</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default HomeScreen;