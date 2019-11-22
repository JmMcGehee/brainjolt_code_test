import React from 'react';
import logo from './logo.svg';
import './App.css';

const items = [
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.10.18-AM.png',
    altText: 'Bird Drowning'
  },
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.10.07-AM-504x675.png',
    altText: 'Kid with no Head'
  },
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.09.58-AM.png',
    atlText: 'Woman with Long Legs'
  },
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.09.48-AM-672x675.png',
    altText: 'Woman with NO legs'
  },
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.09.32-AM.png',
    altText: 'Dog with Hands'
  }
]


function App() {
  return (
    <div className="App">
      <h1>BrainJolt Code Test</h1>
      {
        items.map(item =>
          <img src={item.src} alt={item.altText}/>  
        )
      }
    </div>
  )
}

export default App;
