import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging';
export default function App() {
  useEffect(()=>{
    getDeviceToken()
  },[])
  const getDeviceToken=async()=>{
    let token =await messaging().getToken()
    console.log(token);
  }
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <View>
      <Text>sanju_ILU</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
