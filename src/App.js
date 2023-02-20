
import { Component } from 'react';
import './App.css';
import Companyname from './components/Companyname.js'
import Description from './components/Description.js'
import Logo from './components/Logo.js'
import Image from './components/Image.js'
import Price from './components/Price.js'
import Button from './components/Button.js'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Logo />
      <Companyname />
      <Image />
      <Description /> 
      <Price />
      <Button />
    </div>
  );
}
}

export default App;
