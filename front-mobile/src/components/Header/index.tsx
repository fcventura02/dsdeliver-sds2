import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')}/>
      <Text style={styles.text}>Ds Delivery</Text>
    </View>
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
    backgroundColor:'#da5c5c',
    flexDirection:'row'
    
  },
  text:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 25,
      letterSpacing: -0.24,
      marginLeft: 15,
      fontFamily: 'OpenSans_700Bold',
  }
});