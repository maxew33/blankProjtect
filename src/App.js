import './App.css';
import {useEffect} from 'react'

function App() {
  
  useEffect(() => {
    console.log(`
 _                       
|_)  _   _  o  _       _ 
|_) (_) | | | (_) |_| |  
           _|            
      \\_________/
    
`)

  }, [])
  return (
    <div className="App">
      hello max
    </div>
  );
}

export default App;
