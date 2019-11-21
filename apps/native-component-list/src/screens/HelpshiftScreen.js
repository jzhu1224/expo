import * as React from 'react';
import { Dimensions, View } from 'react-native';
import Helpshift from 'helpshift-react-native';

const config = {
  apiKey: 'e95f9d1a5615cf620702edda85508331',
  domain: 'brex-sandbox.helpshift.com',
  appId: 'brex-sandbox_platform_20190906013008315-cdc289a3accd053',
  user: {
    identifier: 'none',
    email: 'brent@expo.io',
  },
  height: 500,
  width: Dimensions.get('window').width,
  cifs: {},
};

export default function HelpshiftScreen() {
  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <Helpshift config={config} style={{ flex: 1, height: 500 }} />
    </View>
  );
}

HelpshiftScreen.navigationOptions = {
  title: 'Helpshift Example',
};
