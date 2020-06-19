/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
console.log('1.1.1');
const Header = () => {
  const {textStyle} = styles;
  return <Text style={textStyle}>Album!!</Text>;
};
console.log('1.1.2');
const styles = {
  textStyle: {
    fontSize: 20,
  },
};
export default Header;
