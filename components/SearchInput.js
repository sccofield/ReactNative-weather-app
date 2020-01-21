import React from 'react';
import {StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: ''
    }
  }
  handleChangeText = (location) => {
    this.setState({
      location
    })
  }

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { location } = this.state;

    if(!location) return;

    onSubmit(location)
    this.setState({
      location:''
    })
  }

  render(){
    const { location } = this.state
    const { placeholder } = this.props;
    return(
      <View style = {styles.container}>
        <TextInput
          value= {location}
          placeholder= {placeholder}
          autoCorrect={false}
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
          style={styles.TextInput}
          clearButtonMode='always'
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
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
