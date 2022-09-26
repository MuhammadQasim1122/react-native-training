import React, {useState} from 'react';
import type {Node} from 'react';
import styles from './formStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Axios from 'axios';
import TestApp from '../pages-test/test';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

const Form: () => Node = ({ navigation }) => {
    const url = "https://webhook.site/a6c8c95f-5d4b-4067-8451-ecd4af4a9da5";
    const [formData, changeFormData] = useState({
        firstName: null,
        lastName: null,
        email: null
    });
    const alertPopUp = () =>
    Alert.alert(
      "Error",
      "It's look like some of the fields are empty, try to fill values",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    const submitForm = () => {
        if(formData.firstName == "" || formData.lastName == "" || formData.email == ""){
            alertPopUp();
        }
        else{
            Axios.post(url,
                formData, {
                  headers: {
                    'Access-Control-Allow-Origin' : '*'
                  }
                 })
              .then(res =>{
                if(res.status === 200 ){
                  alert("Submitted Succesfully");
                }
              })
              changeFormData({firstName : "", lastName: "", email: ""})
        }
        }

  return [
      <View>
       <Text>Enter Your First Name</Text>
       <TextInput
       placeholder = "Firstname"
       onChangeText = {text => changeFormData({...formData, firstName : text})}
       value = {formData.firstName}
       ></TextInput>
       <Text>Enter Your Last Name</Text>
       <TextInput
       placeholder = "Lastname"
       onChangeText = {text => changeFormData({...formData, lastName : text})}
       value = {formData.lastName}
       ></TextInput>
        <Text>Enter Your Email</Text>
       <TextInput
       placeholder = "Email@email.com"
       textContentType="emailAddress"
       keyboardType="email-address"
       onChangeText = {text => changeFormData({...formData, email : text})}
       value = {formData.email}
       ></TextInput>
       <Button
        onPress={submitForm}
        title="Submit"
      />
      </View>
    ];
};

export default Form;
