import { Route, Routes } from "react-router-dom";
import { Layout } from "Layout";
import { useAuth } from "../hooks/useAuth";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { Loader } from "./Loader";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));


export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? 
  (<Loader />)
  :
  (<div
          style={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 30,
            color: '#010101',
            background: "#f2f3f4"
          }}
        >
      <Routes>
        <Route path="/" element= {<Layout />} >
          <Route index element={<Home />}/>
          <Route path="/contacts" 
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }/>
          <Route path="/login" 
            element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }/>
          <Route path="/register" 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Register />} />
              }/>
        </Route>
      </Routes>
    </div>
  )

};
