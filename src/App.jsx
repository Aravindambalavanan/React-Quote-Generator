import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setQuote] = useState("");
  const [author,setAuthor]= useState("");

  const quoteAPI = async() =>{
    let arrayOfQuotes = []; 
    try{
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes=data.data;
    }
    catch(err){
      console.log(err);
    }
    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(err);
    }
  }

  useEffect(()=>{
    quoteAPI();
  },[]);

  return (
    <div className='App'>
      <div className='container'>
        <div>
          <div>{quote}</div> 
          <div id='author'>-{author}</div>
        </div>
      </div>
      <button onClick={quoteAPI} id='btn'>New Quote</button>
    </div>
  )
}

export default App
