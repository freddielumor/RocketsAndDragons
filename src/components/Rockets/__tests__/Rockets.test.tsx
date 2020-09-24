import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Rockets from '../Rockets'

describe('<Rockets />', () => {
  test('should display rockets text', async () => {
    const { getByText } = render(<Rockets />)

    getByText('ROCKETS')
  })
})
