import React, {Component,Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import './App.css';

const loading = () => <div></div>

const withLayout = (WrappedComponent) => {
  const HOC = class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
}

function App() {
  return (
    <BrowserRouter>
      {routes.map((route, index) => {
            return (
              <route.route
                key={index}
                path={route.path}
                exact={route.exact}
                roles={route.roles}
                component={withLayout(props => {
                  // const Layout = this.getLayout();
                  return (
                    <Suspense fallback={loading()}>
                        <route.component {...props} />
                      {/* <Layout {...props}>
                      </Layout> */}
                    </Suspense>
                  );
                })}
              />
            );
      })}
    </BrowserRouter>
  );
}

export default App;
