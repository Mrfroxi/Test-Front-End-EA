import { useState } from 'react';
import './App.css';
import Modal from './shared/modal/modal';
import Wrapper from './wraapper/mainWrapper/mainWrapper';

function App() {
  const [ modalActive , setModalActive] =useState(false)
   return (
    <>
      <Wrapper setModal={setModalActive}/>
      <Modal  active={modalActive} setActive={setModalActive}/>
    </>
  );
}

export default App;
