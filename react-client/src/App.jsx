import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState("empty")
  
  const fetchAPI = async () => {
    await axios.get("http://localhost:5000/").then((res) => {setData(res.data.message)});
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  // console.log(data) 

  return (
    <>
      <div>
        <h1>{data}</h1>
      </div>
    </>
  )
}

export default App
