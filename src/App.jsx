import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
// import AllTheBooks from './components/AllTheBooks';
import Welcome from './components/Welcome';
import BooksList from './components/BooksList';

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      {/* <AllTheBooks></AllTheBooks> */}
      <BooksList></BooksList>
      <Footer></Footer>
    </>
  );
}

export default App;
