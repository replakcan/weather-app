import getWeatherDataByLocation from '../api/get-weather-data-by-location'

export default function setLocationForm() {
  const setLocationForm = document.createElement('form')

  const locationLabel = document.createElement('label')
  const locationInput = document.createElement('input')
  const submitBtn = document.createElement('button')

  setLocationForm.setAttribute('id', 'location_form')

  locationInput.setAttribute('type', 'text')
  locationInput.setAttribute('id', 'location')
  locationInput.setAttribute('name', 'location')
  locationInput.setAttribute('autofocus', '')

  locationLabel.setAttribute('for', 'location')
  locationLabel.textContent = 'location: '

  submitBtn.setAttribute('type', 'submit')
  submitBtn.setAttribute('form', 'location_form')
  submitBtn.textContent = 'get weather info'

  locationLabel.appendChild(locationInput)
  setLocationForm.appendChild(locationLabel)
  setLocationForm.appendChild(submitBtn)

  setLocationForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const location = locationInput.value

    const contentDiv = document.querySelector('#content')

    contentDiv.innerHTML = ''

    const currentWeatherConditions = await getWeatherDataByLocation(location)

    const infoPara = document.createElement('p')
    infoPara.textContent = `The weather is ${currentWeatherConditions.conditions.toUpperCase()} in ${location.toUpperCase()}.`

    setLocationForm.reset()

    contentDiv.appendChild(infoPara)
  })

  const formContainer = document.querySelector('#form-container')

  formContainer.appendChild(setLocationForm)

  return setLocationForm
}
