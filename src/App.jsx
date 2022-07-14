import './App.scss'
import { BrowserRouter as Router} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { magic } from './utils/magic';
import { UserContext } from './contexts/UserContext';
import AnimatedRoutes from './AnimatedRoutes';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      return isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser({ user: null });
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <AnimatedRoutes/>
        </Router>
      </UserContext.Provider>
    </div>
  )
}

export default App
