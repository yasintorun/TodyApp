import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodyButton from './src/components/UI/button/button'


const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TodyButton title='Contiune' size='md' />

      <TodyButton onPress={() => console.log(" aksd jaskdj")} title='Contiune' mode='elevated' fullWidth />
      <TodyButton title='Contiune' mode='outlined' />
      <TodyButton title='Contiune' mode='text' />

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    padding: 10
  }
})