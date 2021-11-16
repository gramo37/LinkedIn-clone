import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/appBody/sidebar/Sidebar';
import Feed from './components/appBody/feed/Feed'
import Widget from './components/appBody/widget/Widget';
import { selectUser } from './features/userSlice';
import { useSelector, useDispatch } from "react-redux";
import Login from './components/login/Login';
import { auth } from './components/Firebase';
import { useEffect } from 'react';
import { login, logout } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is Logged In
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        // User is Logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <>
      <div className="app">
        <Header />

        {!user ? <Login /> :
          <div className="app-body">
            <Sidebar userImg={ user.profilePic } userBackGroundImg="https://images.unsplash.com/photo-1635532857929-3641c4dd9326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjY5NTU3Nw&ixlib=rb-1.2.1&q=80&w=1080" />
            <Feed userImg={ user.profilePic } />
            <Widget />
          </div>
        }
      </div>
    </>
  );
}

export default App;
