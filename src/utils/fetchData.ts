import axios from 'axios'

// Data Fetching Utility
export default async function fetchData(url: string): Promise<any> {
  try {
    const response = await axios.get(url)
    return response
  } catch (error) {
    return error
  }
}
