import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface PickerOptionsProps {
  items: {
    label: string;
    value: string;
  }[];
  action: Function;
  value: string;
  label?: string;
}
const styles = StyleSheet.create({
  picker: {
    width: '100%',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
  },
  defaultValue: {
    color: '#808080',
  },
  label: {
    color: '#000000',
    fontSize: 18,
  },
});
export const PickerOptions = ({
  items,
  action,
  value,
  label,
}: PickerOptionsProps) => {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.picker}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => action(itemValue)}>
          <Picker.Item
            label="Seleccionar"
            value=""
            style={styles.defaultValue}
          />

          {items.map(item => (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={item.value}
            />
          ))}
        </Picker>
      </View>
    </>
  );
};
