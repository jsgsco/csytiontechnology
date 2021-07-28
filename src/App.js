import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Admin } from './pages/Admin/Admin'
import { Error } from './pages/Error/Error'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/panel-admin" component={Admin} exact/>
        <Route path="/**" component={Error} exact/>
      </Switch>
    </Router>
  );
}

export default App;
