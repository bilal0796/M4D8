import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNavbar from './Components/MyNavbar';
import GetMovies from './Components/Home';
import GetMovies2ndrow from "./Components/Movies";
import GetMovies3ndrow from "./Components/Movies2";
import Header from "./Components/Header";

import FooterSection from "./Components/FooterSection";
function App() {
  return (
    <>
    <MyNavbar />
    <div className='container img-fluid'>
    <Header />
    </div>
    <GetMovies />
    <GetMovies2ndrow />
    <GetMovies3ndrow />
    <FooterSection />
  </>);
}

export default App;
