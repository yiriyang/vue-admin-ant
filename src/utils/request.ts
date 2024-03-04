import axios from 'axios'

const createService = () => {
  const service = axios.create()

  service.interceptors.request.use((config) => config)

  service.interceptors.response.use((response) => {
    console.log(response)
    return response
  })

  return service
}

export const request = createService()
