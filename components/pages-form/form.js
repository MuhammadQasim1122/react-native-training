import React, {useReducer, useState} from 'react';
import type {Node} from 'react';
import styles from './formStyles';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const Form: () => Node = () => {
    const [firstName, changeFirstName] = useState('');
    const [lastName, changeLastName] = useState('');
    const [email, changeEmail] = useState('');
    const submitForm = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        changeFirstName('');
        changeLastName('');
        changeEmail('');
    }
  return (
      <View>
       <Text>Enter Your First Name</Text>
       <TextInput
       placeholder = "Firstname"
       onChangeText = {changeFirstName}
       value = {firstName}
       ></TextInput>
       <Text>Enter Your Last Name</Text>
       <TextInput
       placeholder = "Lastname"
       onChangeText = {changeLastName}
       value = {lastName}
       ></TextInput>
        <Text>Enter Your Email</Text>
       <TextInput
       placeholder = "Email@email.com"
       onChangeText = {changeEmail}
       value = {email}
       ></TextInput>
       <Button
        onPress={submitForm}
        title="Submit"
      />
      </View>
  );
};

export default Form;
