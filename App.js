import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Platform, ActivityIndicator } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';


const App = () => {

  useEffect(() => {
    checkpermission()
  }, []);
  const checkpermission = async () => {
    const newCameraPer = await Camera.requestCameraPermission()
    const newMicroPer = await Camera.requestMicrophonePermission()
    console.log(newCameraPer, newMicroPer)
  }
  const device = useCameraDevice('back')

  if (device == null) return <ActivityIndicator />

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        isActive={true}
        device={device}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});

export default App;