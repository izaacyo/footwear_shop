import './App.css';

import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { useEffect } from 'react';
import { intializeShoes } from './store/actions/actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(intializeShoes());
  }, { dispatch })

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
