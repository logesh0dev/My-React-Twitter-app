import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login/login';
import Singup from './pages/login/singup';
import ProtectRoute from './pages/protectedRoute';
import PageLoading from './pages/PageLoading';

import Feed from './pages/Feed/Feed';
import Explore from './pages/Explore/Explore';
import Notification from './pages/Notification/Notification';
import Message from './pages/Message/Message';
import Bookmark from './pages/Bookmarks/Bookmark';
import List from './pages/List/List';
import Profile from './pages/Profile/Profile';
import More from './pages/More/More';

function App() {
  return (
    <div className="App">
      <Router> 
        {/* <nav>
          <Link to="/" className='text' >home</Link>
          <Link to='/login' className='text' >Login</Link>
          <Link to='/signup' className='text' >Sign Up</Link>

        </nav> */}
        <Routes>
          <Route path='/' element={<ProtectRoute><Home /></ProtectRoute>}>
            <Route index element={<Feed></Feed>}  ></Route>
          </Route>

          <Route path='/home' element={<ProtectRoute><Home /></ProtectRoute>}>
            <Route path='feed' element={<Feed></Feed>}  ></Route>
            <Route path='explore' element={<Explore></Explore>}  ></Route>
            <Route path='notification' element={<Notification></Notification>}  ></Route>
            <Route path='messages' element={<Message></Message>}  ></Route>
            <Route path='bookmarks' element={<Bookmark></Bookmark>}  ></Route>
            <Route path='lists' element={<List></List>}  ></Route>
            <Route path='profile' element={<Profile></Profile>}  ></Route>
            <Route path='more' element={<More></More>}  ></Route>

          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Singup />} />
          <Route path='/pageloading' element={<PageLoading />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
