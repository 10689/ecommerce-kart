import Cart from './pages/Cart'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import SinglePage from './pages/SinglePage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const App = () => {
  const user = false

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/products/:category'>
          <ProductList />
        </Route>
        <Route exact path='/product/:id'>
          <SinglePage />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/login'>
          {user ? <Redirect to='/' /> : <Login />}
        </Route>
        <Route exact path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
