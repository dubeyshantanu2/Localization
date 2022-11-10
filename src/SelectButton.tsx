import React from 'react';
import { Text, Pressable } from 'react-native';
import tw from 'twrnc';

type props = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

export default function SuggaCheckBox({ title, isActive, onPress }: props) {
  return (
    <Pressable
      onPress={onPress}
      style={tw`py-2.25 px-7.75 bg-[${
        isActive ? '#04825C' : '#fff'
      }] border-2 items-center justify-center flex-row rounded-md border-[${
        !isActive ? '#AAB4B1' : '#04825C'
      }]`}>
      <Text style={tw`text-xl text-[${isActive ? '#fff' : '#D3D6D5'}] font-normal`}>{title}</Text>
    </Pressable>
  );
}
