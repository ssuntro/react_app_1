import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import { useFetch } from '../hooks/useFetch'
import { fetchUserPlaces } from '../../http'

const HomeScreen = ({ navigation }) => {
  const {
    isFetching,
    error,
    fetchedData: userPlaces,
    setFetchedData: setUserPlaces,
  } = useFetch(fetchUserPlaces, []) //  a brand new indpedent copy of customHook is created so independent state snapshot
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Text style={styles.text}>Custom hook: {userPlaces}</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go to Text Demo'
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title='Go to Box Demo'
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
