import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Index from "./Screens";

function App() {
  return(
      <BrowserRouter>
        <Index/>
      </BrowserRouter>
  )
}

export default App;
