import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import ImageViewCC from '@/components/ImageViewCC';
import Button from '@/components/Button';
import { useState } from 'react';

const PlaceholderImage = require("@/assets/background-image.png");

export default function Index() {

  const [selectedImage,setSelectedImage]=useState(PlaceholderImage)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  };



  const F1=()=>fetch('https://daryabusiness.online:30004/todo/task', {
    method: 'GET',
    headers: {
      'accept': '*/*',
    },
  })
    .then((response) => response.json())  // Assuming the response is in JSON format
    .then((data) => {
      console.log('Response data:', data);
      alert(JSON.stringify(data))
    })
    .catch((error) => {
      console.error('Error:', error);
    });



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewCC src={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme='primary' onPress={pickImageAsync}/>
        <Button label="Use this photo" onPress={F1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
