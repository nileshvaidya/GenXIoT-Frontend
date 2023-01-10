import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
 

import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home/Home';
import Demo from './pages/demo/Demo';
import { ProtectedRoute } from './ProtectedRoute';
import { useCookies } from 'react-cookie';
import { useStateValue } from './store/StateProvider';
import { actionTypes } from './store/reducer';

const queryClient = new QueryClient()
const App = () => {
  const [cookies ] = useCookies(["jwt"]);
  const [{ token }, dispatch] = useStateValue();


  useEffect(() => {
    const setToken = () => {
      const { jwt } = cookies;
      if (jwt) {
        dispatch({ type: actionTypes.SET_TOKEN, value: jwt });
      }
    };
    if (token === null) {
      setToken();
    }
  }, [dispatch, token, cookies]);
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
        <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
           <Route path="/demo"
            element={
              <ProtectedRoute>
                <Demo />
              </ProtectedRoute>
            }
          />
            
        </Routes>

      </Router>
    </QueryClientProvider>
  );
};

export default App

