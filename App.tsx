import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import AppRouters from './src/Router/AppRouters';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <AppRouters />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App;
