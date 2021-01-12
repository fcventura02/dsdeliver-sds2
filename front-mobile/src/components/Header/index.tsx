import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation();

  const handleOnPress = () => navigation.navigate('Home');

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.text}>Ds Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingTop: 45,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#da5c5c',
    flexDirection: 'row'

  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: -0.24,
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold',
  }
});