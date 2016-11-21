import React from 'react'
import { Input } from 'reactstrap'

export default class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    const style = {
      paddingBottom: '10pt'
    }
    return (
      <div class="" style={style}>
        <Input type="search" placeholder="Search"/>

      </div>
    )
  }
}