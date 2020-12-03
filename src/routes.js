import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

// lazy load all the views
const Dashboard = React.lazy(() => import("./pages/dashboard/"));

// auth
const Login = React.lazy(() => import("./pages/login"));
const Register = React.lazy(() => import("./pages/register"));
const Clientes = React.lazy(() => import("./pages/clientes"));
const Productos = React.lazy(() => import("./pages/productos"));
const Agencias = React.lazy(() => import("./pages/agencias"));
const Cuentas = React.lazy(() => import("./pages/cuentas"));

// handle auth and authorization

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // const isAuthTokenValid = isUserAuthenticated();
      // if (!isAuthTokenValid) {
      //   // not logged in so redirect to login page with the return url
      //   return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      // }

      // const loggedInUser = getLoggedInUser();
      // // check if route is restricted by role
      // if (roles && roles.indexOf(loggedInUser.role) === -1) {
      //   // role not authorised so redirect to home page
      if(!sessionStorage.getItem("token")){ 
        return <Redirect to={{ pathname: '/login' }} />
      }
      // }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

const routes = [
  // auth and account
  { path: "/login", name: "Login", component: Login, route: Route},
  { path: "/register", name: "Register", component: Register, route: Route},
  { path: "/clientes", name: "Clientes", component: Clientes, route: Route , route: PrivateRoute},
  { path: "/productos", name: "Productos", component: Productos, route: Route , route: PrivateRoute},
  { path: "/agencias", name: "Agencias", component: Agencias, route: Route , route: PrivateRoute},
  { path: "/cuentas", name: "Cuentas", component: Cuentas, route: Route , route: PrivateRoute},

  // other pages
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    route: PrivateRoute,
  },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute,
  },
];

export { routes, PrivateRoute };
