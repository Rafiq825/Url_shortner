import './App.css'
import * as React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Container from './components/container/Container';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return(
    <>
    <Header/>
    <Container/>
    <Footer/>
    </>
  ) ;
};

export default App;


