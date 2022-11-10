import { atom, useAtom } from 'jotai';
import React from 'react';
import { View, Text, Button } from 'react-native';

import Localisation from '../localisation';
import translation from '../translations';

export const languageAtom = atom('en');

const SettingScreen = ({ navigation }: { navigation: any }) => {
  const [language] = useAtom(languageAtom);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Localisation />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {translation(language).t('welcome')} {translation(language).t('name')}
      </Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

export default SettingScreen;
