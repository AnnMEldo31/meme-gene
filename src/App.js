import './App.css';
import { Memes } from './memeList';

function App() {
  const randomNum = Math.floor(Math.random() * Math.floor(Memes.length))
  return (
    <div className="App">
      <img className="memeImg" src={Memes[randomNum].meme} />
    </div>
  ); 
}

export default App;
