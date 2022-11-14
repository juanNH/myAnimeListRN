import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {SimpleFlatList} from '../../../components/commons';
import {Pagination} from '../../../components/commons/';
import {SearchScreenContext} from '../SearchScreen';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
export const SearchSection = () => {
  const {animes, pageInput, handleChangeInputSearch, searchByPage} =
    useContext(SearchScreenContext);
  return (
    <View style={styles.container}>
      <Pagination
        page={animes.page}
        maxPage={animes.maxPages}
        pageInput={pageInput}
        handlePageInput={handleChangeInputSearch}
        actionNext={searchByPage}
        actionPrev={searchByPage}
        actionGo={searchByPage}
      />
      <SimpleFlatList
        data={animes.animes}
        title={''}
        isLoading={animes.isLoading}
      />
      <Pagination
        page={animes.page}
        maxPage={animes.maxPages}
        pageInput={pageInput}
        handlePageInput={handleChangeInputSearch}
        actionNext={searchByPage}
        actionPrev={searchByPage}
        actionGo={searchByPage}
      />
    </View>
  );
};
