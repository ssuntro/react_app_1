export async function fetchAvailablePlaces() {
  const mockFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        places: [
          {
            id: 'p1',
            title: 'Forest Waterfall',
            image: {
              src: 'forest-waterfall.jpg',
              alt: 'A tranquil forest with a cascading waterfall amidst greenery.',
            },
            lat: 44.5588,
            lon: -80.344,
          },
          {
            id: 'p2',
            title: 'Sahara Desert Dunes',
            image: {
              src: 'desert-dunes.jpg',
              alt: 'Golden dunes stretching to the horizon in the Sahara Desert.',
            },
            lat: 25.0,
            lon: 0.0,
          },
        ],
      })
    }, 2)
  })

  // const response = await fetch('http://localhost:8080/places');
  // const resData = await response.json();
  const resData = await mockFetch

  // if (!response.ok) {
  //   throw new Error('Failed to fetch places')
  // }

  console.log(`resData.places: ${resData.places}`)
  return resData.places
}

export async function fetchUserPlaces() {
  const mockFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        places: 'place from API ja',
        timestamp: new Date().toISOString(),
      })
    }, 2)
  })

  const response = await mockFetch

  return response.places
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const resData = await response.json()

  if (!response.ok) {
    throw new Error('Failed to update user data.')
  }

  return resData.message
}
