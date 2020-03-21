import axios from 'axios'

function count() {
  if (process.env.NODE_ENV === 'production') {
    axios.post(process.env.REACT_APP_COUNTER)
  }
}

export default count()
