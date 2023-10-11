import axios from './axios.js'

export const getIndicators = async () => {
  try {
    const res = await axios.get('/Indicators/All')
    console.log(res);
    return res.data.data
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error.message}`)
  }
}
 