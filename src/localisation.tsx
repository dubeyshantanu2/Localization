import { useAtom } from 'jotai';
import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import SelectButton from './SelectButton';
import { languageAtom } from './screen/SettingScreen';

export default function Localisation() {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
    <View style={tw`justify-center items-center`}>
      <Text style={tw`text-3xl font-extrabold`}>Select a language</Text>
      <View style={tw`flex-row justify-center items-center`}>
        <SelectButton
          title="English"
          onPress={() => setLanguage('en')}
          isActive={language === 'en'}
        />
        <SelectButton
          title="Hindi"
          onPress={() => setLanguage('hi')}
          isActive={language === 'hi'}
        />
        <SelectButton
          title="Malayalam"
          onPress={() => setLanguage('ma')}
          isActive={language === 'ma'}
        />
      </View>
    </View>
  );
}
