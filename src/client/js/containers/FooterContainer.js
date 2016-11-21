import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

export default class FooterContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 class="display-3">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p class="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}