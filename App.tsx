import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { TokenStore, Passage } from '@passageidentity/passage-js';

// import Passage, {
//   PassageUser,
//   AllowedFallbackAuth,
//   PassageError,
//   PassageErrorCode,
// } from '@passageidentity/passage-react-native';

const passage = new Passage('y4WGlmVdLzmjqF9TDcOhrQb2');

export default function App() {
  const [email, setEmail] = useState('roxy@maicoin.com');

  const handleRegisterPasskey = useCallback(async () => {
   try {
    const result = await passage.register(email);
    console.log(result);
    } catch(err) {
      console.log(err);
    }
  }, [email]);

  const handlePasskeyLogin = useCallback(async () => {
    try {
    const result = await passage.login(email);
    console.log(result);
    } catch(err) {
      console.log(err);
    }
  }, [email]);


  const handleTextInputChange = useCallback((value: string)=>{
    console.log(value);
    setEmail(value);
  }, [])

  return (
    <View style={styles.container}>
      <Button onPress={handlePasskeyLogin} title="Login With Passkey"/>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextInput style={{width: 200, height: 30, marginVertical: 8, textAlign: 'center'}} onChangeText={handleTextInputChange} value={email}/>
      </View>
      <Button onPress={handleRegisterPasskey} title="Register With Passkey"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
