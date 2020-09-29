import * as React from 'react'
import { render } from '../../../utils/testingUtils'
import 'jest-styled-components'

import Rockets from '../Rockets'

describe('<Rockets />', () => {
  test('should display rockets text', async () => {
    const { getByText, debug } = render(<Rockets />)
    debug()
    getByText('FRED')
  })
})
