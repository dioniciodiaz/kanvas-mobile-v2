import React from 'react';
import { Item as NbItem, Input as NbInput } from 'native-base';
import styled from 'styled-components';
import { View, Text } from '@components';
import { colors } from '@styles';

const Item = styled(NbItem)`
  max-height: 40px;
  border-color: ${colors.base};
  border-width: 0.5px;
  border-radius: 5px;
`;

interface Iinput {
  keyboardType?: string;
  value: string;
  onChange: (e: string) => void;
  onBlur: () => void;
  onSubmit: () => void;
  label: string;
  useRef: () => void;
  onFocus: () => void;
  password?: boolean;
}
const Input = ({
  value,
  onChange,
  onBlur,
  onSubmit,
  label,
  useRef,
  onFocus,
  password,
}: Iinput) => {
  return (
    <View input>
      <Text input>{label}</Text>
      <Item regular>
        <NbInput
          secureTextEntry={password}
          ref={useRef}
          value={value}
          autoCapitalize="sentences"
          autoCorrect
          autoFocus
          blurOnSubmit
          caretHidden
          contextMenuHidden
          keyboardType="default"
          maxLength={120}
          onBlur={onBlur}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          selectionColor={colors.base}
          onFocus={onFocus}
        />
      </Item>
    </View>
  );
};

export default Input;
