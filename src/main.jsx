import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const Hola = ({name, nickname}) =>{
return <div>
  <h2>{name}</h2>
  <h2>{nickname}</h2>
  </div>
}

const app = (
  <div>
    <Hola name ='Coco' 
     nickname='Angelica'></Hola>
  </div>
);

ReactDOM.render(app);