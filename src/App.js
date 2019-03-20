import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers'
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header headerText='Tech Stack'/>
          <LibraryList />
        </View>
      </Provider>
    )
  };
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
}

export default App;