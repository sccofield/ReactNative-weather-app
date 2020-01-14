import React from 'react';
import {StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
        <TextInput
          placeholder= {this.props.placeholder}
          autoCorrect={false}
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
          style={styles.TextInput}
          clearButtonMode='always'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  TextInput: {
    flex: 1,
    color: 'white'
  }
})
