import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

interface Props {}

const RegisterScreen:React.FunctionComponent<Props> = (props) => (
  <SafeAreaView>
    <Text>Screen: RegisterScreen</Text>

    <TouchableHighlight onPress={() => props.navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default RegisterScreen;