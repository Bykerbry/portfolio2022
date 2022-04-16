import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexPage  from './pages/index'
import ErrorPage  from './pages/404'

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact> <IndexPage /> </Route>
        <Route path="*" > <ErrorPage /> </Route>
      </Switch>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
