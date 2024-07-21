import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useFetch } from '../hooks/useFetch'
import { fetchAvailablePlaces } from '../../http'

async function fetchSortedPlaces() {
  function sortPlacesByDistance(places, lat, lon) {
    const sortedPlaces = [...places]

    sortedPlaces.sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
    return sortedPlaces
  }

  const places = await fetchAvailablePlaces()

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        pos.coords.latitude,
        pos.coords.longitude
      )

      resolve(places)
    })
  })
}

const ComponentsScreen = () => {
  const {
    isFetching,
    error,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces, [])
  const name = 'Stephen'

  return (
    <View>
      <Text style={styles.subHeaderStyle}>
        Custom hook: {availablePlaces.length}
      </Text>

      {availablePlaces.map((place, index) => (
        <Text style={styles.subHeaderStyle} key={index}>
          {place.title}
        </Text>
      ))}

      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
})

export default ComponentsScreen
