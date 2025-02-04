import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'




export default function ImageViewCC({src}) {
  return (
    <View style={s.imageContainer}>
    <Image source={src} style={s.image}></Image>
    </View>
  )
}


const s=StyleSheet.create({
    imageContainer: {
        flex: 1,
      },
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
})