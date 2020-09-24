import * as React from 'react'
import { render } from '@testing-library/react'

import Dragons from '../Dragons'

describe('<Rockets />', () => {
  test('should display rockets text', async () => {
    const { getByText } = render(<Dragons />)

    getByText('DRAGONS')
  })
})
