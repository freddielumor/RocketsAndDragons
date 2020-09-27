import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { AppHeader } from './components/Header/Header'
import { AppNav } from './components/Nav/Nav'
import Rockets from './components/Rockets/Rockets'
import Dragons from './components/Dragons/Dragons'
import RocketItem from './components/RocketItem/RocketItem'
import './styles/base/index.scss'

interface IAppProps {}

const App: React.FC<IAppProps> = () => (
  <Provider store={store}>
    <div className="app">
      <AppHeader>
        <AppNav />
      </AppHeader>

      <main>
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>

          <Route path="/dragons">
            <Dragons />
          </Route>

          <Route path="/rockets/:rocket_id">
            <RocketItem />
          </Route>
        </Switch>
      </main>
    </div>
  </Provider>
)

export default App
