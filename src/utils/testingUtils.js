import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import thunk from 'redux-thunk'
import { render } from '@testing-library/react'
import rootReducer from '../redux/reducers/index'
import '@testing-library/jest-dom'

// TESTING UTILITY

// This util alllows us to replicate the application state for testing purposes.
// 1. Setup initial state and mock store
// 2. Create a test provider containing the state & router
// 3. Create the test render function which is used in our test files
// 4. re-export everything from Testing Library
// 5. Override render method

const initialState = {}
const mockStore = createStore(rootReducer, initialState, applyMiddleware(thunk))

const testWrapper = ({ children }) => {
  return (
    <Router>
      <ReduxProvider store={mockStore}>{children}</ReduxProvider>
    </Router>
  )
}

const testRender = (ui) => render(ui, { wrapper: testWrapper })

export * from '@testing-library/react'

export { testRender as render }
