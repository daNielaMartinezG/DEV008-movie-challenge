import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch("http://www.omdbapi.com/?apikey=[b19327ea]&")
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);

  return (
    <div className='App'>
      <h1>Movi Challenge</h1>
      <div className='card'></div>
      <ul>
        {data?.map((user) => <li key={user.id}>{user.Title}</li>)}
      </ul>
    </div>
    )
}

export default App
