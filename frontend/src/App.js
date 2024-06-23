import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import MyNotes from "./pages/MyNotes/MyNotes"; 
import { BrowserRouter,  Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreateNote from "./pages/CreateNote/CreateNote";
import singleNote from "./pages/singleNote";
import { useState } from 'react';
import ProfilePage from './pages/ProfilePage/ProfilePage';


const App = () => {

  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
    <div className="App">
      <Header setSearch={setSearch}/>

        <main >
          <Route path='/' component={LandingPage} exact/>
          <Route path='/login' component={LoginPage} exact/>
          <Route path='/profile' component={ProfilePage} exact/>
          <Route path='/register' component={RegisterPage} exact/>
          <Route path='/createnote' component={CreateNote} exact/>
          <Route path='/note/:id' component={singleNote} exact/>
          <Route path='/mynotes' component={() => <MyNotes search ={search} />}/>
        </main>
      <Footer/>
    </div>
    </BrowserRouter>

  )
}

export default App;
