import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/public/Footer';
import { Navbar } from './components/public/Navbar';
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';
import Main from './components/public/Main';
import { Home } from './components/public/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Main />} />
        <Route exact path={"/home"} element={<Home />} />
        <Route path={"/details/:id"} element={<Detail />} />
        <Route path={"/user-form"} element={<UserForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
