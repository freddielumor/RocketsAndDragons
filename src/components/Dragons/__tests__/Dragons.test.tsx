import * as React from 'react'
import { render } from '../../../utils/testingUtils'
import 'jest-styled-components'

import Dragons from '../Dragons'

describe('<Dragons />', () => {
  test('should display dragons text', async () => {
    const { getByText } = render(<Dragons />)

    getByText('DRAGONS')
  })
})
