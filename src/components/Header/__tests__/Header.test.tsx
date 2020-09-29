import * as React from 'react'
import { render } from '../../../utils/testingUtils'
import 'jest-styled-components'

import { Header, Title } from '../Header'

// Header
it('renders Header correctly', () => {
  const { container } = render(
    <Header>
      <div />
    </Header>,
  )

  expect(container).toMatchSnapshot()
})

// Title
describe('<Title />', () => {
  test('should render title', async () => {
    const props = {
      title: 'Test Title',
    }

    const { getByText } = render(<Title>{props.title}</Title>)

    getByText('Test Title')
  })
})
