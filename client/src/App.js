import { Route, Routes  } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AddContact from './pages/AddContact';
import ContactList from './pages/ContactList';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route exact path='/contacts' element={<ContactList />}  />
        <Route exact path='/edit/:id' element={<AddContact />}  />
        <Route exact path='/addcontact' element={<AddContact />}    />
        <Route exact path='/*' element={<Error />}   />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
