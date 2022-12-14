import {Route, Routes} from "react-router-dom";
import './App.css';
import Homepage from './Components/Homepage';
import ChatApp from './Components/ChatApp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className='App'><Homepage /></div>}/>
      <Route path="/chat" element={<div className='App'><ChatApp /></div>}/>
    </Routes>
  )
}
export default App;
