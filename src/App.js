import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserUpsert from './user/userUpsert/userUpsert';
import UserList from './user/userList/userList';
import { useEffect } from 'react';


function App() {

   useEffect(() => {
      localStorage.setItem('userList', JSON.stringify([]));
   }, [])


  return (
    <div className="App">
       <Router>
          <Routes>
             <Route path='/' index Component={UserUpsert}/>
             <Route path='/userList' Component={UserList}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
