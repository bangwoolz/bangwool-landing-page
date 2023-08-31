import './App.scss';
import Header from './components/header.js';
import Main from './pages/main';
import Footer from './components/footer';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
