import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import userUpsert from './user/userUpsert/userUpsert';
import userList from './user/userList/userList';



function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
             <Route path='/' index Component={userUpsert}/>
             <Route path='/userList' Component={userList}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
