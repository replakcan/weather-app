async function getWeatherDataByLocation(location) {
  const api_key = 'GR79NFHV7SRSBZGBHKT93N4V9'
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${api_key}`

  const request = new Request(url, {
    method: 'GET',
  })

  try {
    const response = await fetch(request)

    if (!response.ok) throw new Error(`Response status: ${response.status}`)

    const json = await response.json()
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}

export default getWeatherDataByLocation
