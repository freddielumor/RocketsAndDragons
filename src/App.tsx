import * as React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import { store } from './store'
import Header from './components/Header/Header'
import Rockets from './components/Rockets/Rockets'
import Dragons from './components/Dragons/Dragons'

interface IAppProps {}

const App: React.FC<IAppProps> = () => (
  <Provider store={store}>
    <div className="app">
      <Header />

      <Router>
        <Rockets path="/" />
        <Dragons path="/dragons" />
      </Router>
    </div>
  </Provider>
)

export default App
