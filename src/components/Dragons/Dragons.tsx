import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { StyledButton } from '../Button/Button'

const Dragons: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <h1>DRAGONS</h1>
      <StyledButton>BUTTON</StyledButton>
    </div>
  )
}

export default Dragons
