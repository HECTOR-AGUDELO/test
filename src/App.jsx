import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox';
import db from "./db/quotes.json";

const arrayColors = ["#75c7ff", "#e6a15c", "#a0fb0e", "#b93af8", "#f86f6f", "#20c67a", "#3f8880", "#ebb7ce", "#ff8862", "#ffa43a", "#f50400"]


const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

function App() {

  const [quote, setQuote] = useState(getRandom(db));

  const [color,  setColor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }
     
  
  
  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote} 
      color={color} />
    </div>
  )
}

export default App;
 