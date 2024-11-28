import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from './components/dashboard/navbar';
import Sidebar from './components/dashboard/sidebar';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/actions/ActionProducts';
import { useProducts } from './custom-hooks/useProducts';
import useRout from './custom-hooks/useRoutes';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("tokenTest");
  const location = useLocation();
  const isWebsitePath = location.pathname === "/";
  const products = useProducts()
  useEffect(() => {
    if (products?.length == 0) {
      dispatch(loadProducts());
    }
  }, []);

  const onLoginClick = () => {
    navigate('/dashboard');
  };
  const onLoginSuccess = () => {
    localStorage.setItem("tokenTest", "dummyToken");
    navigate('/dashboard');
  };
  const routes = useRout(onLoginClick, onLoginSuccess);


  return (
    <div className={token && !isWebsitePath ? 'container' : ''}>
      {token && !isWebsitePath && (
        <>
          <Navbar />
          <Sidebar />
        </>
      )}
      <>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} exact path={route.path} element={route.element} />
          ))}
        </Routes>

      </>
    </div>
  );
};

export default App;
