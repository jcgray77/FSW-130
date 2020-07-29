import React from 'react';

import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'
import Select from './components/Select'
/* https://www.bobrosslipsum.com/ For lorem Ipsum */
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <br />
      <br />
      <Button></Button>
      <br />
      <br />
      <Select></Select>
    </div>
  );
}

export default App;