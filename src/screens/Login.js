import React from 'react';
import {Text, View, Image, TextInput, Button} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AntDesign } from '@expo/vector-icons';

export default class Login extends React.Component {
  render() {
    return(
      <View style={{backgroundColor: '#fff', height:'100%'}}>
      <Image source = {require('@expo/snack-static/react-native-logo.png')} style={{width:'100%', height: '40%'}}
      />
      <Text style={{
        fintSize: 30,
        fontFamily: 'SemiBols',
        alignSelf: 'center',      }}>Log In</Text>
      <Text style={{
        fontFamily:'Regular',
        marginHorizontal: 55,
        textAlign: 'center',
        marginTop: 20,
        opacity: 1          }}>Input your Email</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 5,
          paddingHorizontal: 10,
          borderColor: '#00716F',
          borderRadius: 23,
          paddingVertical: 2, }}>
        
        <Icon name='mail' color= '#00716F' size={24}/>
        
        <TextInput
        style={{paddingHorizontal:10}} />

        </View>
        
        
        <Text style={{
        fontFamily:'Regular',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: -50,
        opacity: 1        }}>Input Password </Text>

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
        <AntDesign name="github" size={24} color="black" />
        <TextInput secureTextEntry={true}
        style={{paddingHorizontal:10}} />


        </View>

        <View style={{
          marginHorizontal:55,
          alignItems: 'center',
        }}>
                
        
        <Text> Already registered? </Text> <Button
          title="Go to Registration!"
                    onPress={() => this.props.navigation.navigate('Register')}
        />
        </View> </View>
        
    )}}
