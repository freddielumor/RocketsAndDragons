import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import thunk from 'redux-thunk'
import { render } from '@testing-library/react'
import rootReducer from '../redux/reducers/index'
import '@testing-library/jest-dom'

// TESTING UTILITY

// This util alllows us to replicate the application state for testing purposes.
// We export a render function which contains the application state, to allow us to test our components in isolation their integration across the app.

// 1. Setup initial state and mock store
const initialState = {}
const mockStore = createStore(rootReducer, initialState, applyMiddleware(thunk))

// 2. Create a test provider containing the state
const testWrapper = ({ children }) => {
  return <ReduxProvider store={mockStore}>{children}</ReduxProvider>
}

// 3. Create the test render function which is used in our test files
const testRender = (ui) => render(ui, { wrapper: testWrapper })

// 4. re-export everything from Testing Library
export * from '@testing-library/react'

// 5. Override render method
export { testRender as render }