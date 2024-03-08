import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserHome from './user/userHome/userHome';
import UserUpsert from './user/userUpsert/userUpsert';
import UserList from './user/userList/userList';
import { useEffect } from 'react';
import { USERS } from './fakeuserDataGenerater';   // Initially, display users in the grid using any dummy API that features user data. 


function App() {

   useEffect(() => {
      localStorage.setItem('userList', JSON.stringify(USERS));
   }, [])


  return (
    <div className="App">
       <Router>
          <Routes>
             <Route path='/' index Component={UserHome}/>
             <Route path='/userUpsert' Component={UserUpsert}/>
             <Route path='/userList' Component={UserList}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
