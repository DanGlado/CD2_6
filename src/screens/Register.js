import React from 'react';
import {Text, View, Image, TextInput, Button} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component {
  render() {
    return(
      <View style={{backgroundColor: '#fff', height:'100%'}}>
      <Image source = {require('@expo/snack-static/react-native-logo.png')} style={{width:'100%', height: '40%'}}
      />
      <Text style={{
        fintSize: 30,
        fontFamily: 'SemiBols',
        alignSelf: 'center',      }}>FULL Registration</Text>
      <Text style={{
        fontFamily:'Regular',
        marginHorizontal: 55,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.4        }}>Input your personality data </Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 50,
          paddingHorizontal: 10,
          borderColor: '#00716F',
          borderRadius: 23,
          paddingVertical: 2, }}>
        <Icon name='mail' color= '#00716F' size={24}/>
        <TextInput
        style={{paddingHorizontal:10}} />
        </View>
        <View style={{
          marginHorizontal:55,
          alignItems: 'center',
        }}>
        <Text> Already Log in? </Text> <Button
          title="Go to Log in"
                    onPress={() => this.props.navigation.navigate('Login')}
        />
        </View> </View>
    )}}