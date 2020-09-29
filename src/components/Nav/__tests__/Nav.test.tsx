import * as React from 'react'
import { render } from '../../../utils/testingUtils'
import 'jest-styled-components'

import { AppNav, Nav, NavLink } from '../Nav'

// Nav
it('renders Nav correctly', () => {
  const { container } = render(
    <AppNav>
      <Nav>
        <NavLink to="/test">Test</NavLink>
      </Nav>
    </AppNav>,
  )

  expect(container).toMatchSnapshot()
})
