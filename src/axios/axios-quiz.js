import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-719ff-default-rtdb.firebaseio.com/'
})