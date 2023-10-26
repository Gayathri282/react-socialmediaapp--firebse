import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import { Main } from './Pages/Main/main';
import { Login } from './Pages/login';
import { NavBar } from './components/navbar';
import { Createpost } from './Pages/create-post/create-post';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<Createpost/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
