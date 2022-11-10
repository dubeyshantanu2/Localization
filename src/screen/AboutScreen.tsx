import { useAtom } from 'jotai';
import React from 'react';
import { View, Button, Text } from 'react-native';

import translation from '../translations';
import { languageAtom } from './SettingScreen';

const AboutScreen = ({ navigation }: { navigation: any }) => {
  const [language] = useAtom(languageAtom);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {translation(language).t('welcome')} {translation(language).t('name')}
      </Text>
      <Button title="Setting" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

export default AboutScreen;
