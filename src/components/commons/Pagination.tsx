import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface PaginationProps {
  page: number;
  maxPage: number;
  pageInput: string;
  actionPrev: (page: number) => void;
  actionNext: (page: number) => void;
  actionGo: (page: number) => void;
  handlePageInput: (text: string) => void;
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 70,
    padding: 0,
    textAlign: 'center',
  },
});
export const Pagination = ({
  maxPage,
  pageInput,
  actionGo,
  actionPrev,
  actionNext,
  handlePageInput,
}: PaginationProps) => {
  const handlePrev = () => {
    if (Number(pageInput) > 1) {
      actionPrev(Number(pageInput) - 1);
    }
  };
  const handleNext = () => {
    if (Number(pageInput) < maxPage) {
      actionNext(Number(pageInput) + 1);
    }
  };
  const handleGo = () => {
    if (Number(pageInput)) {
      actionGo(Number(pageInput));
    }
  };
  return (
    <View style={styles.container}>
      <Text
        onPress={handlePrev}
        style={{marginRight: 32, fontSize: 18, color: '#000000'}}>
        Prev
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => handlePageInput(text)}
        value={`${pageInput}`}
      />
      <Text>/{maxPage}</Text>
      <Text
        onPress={handleGo}
        style={{marginLeft: 16, fontSize: 18, color: '#000000'}}>
        Go
      </Text>
      <Text
        onPress={handleNext}
        style={{marginLeft: 32, fontSize: 18, color: '#000000'}}>
        Next
      </Text>
    </View>
  );
};
