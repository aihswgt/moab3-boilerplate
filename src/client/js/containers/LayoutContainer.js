import React from 'react'
import HeaderContainer from './HeaderContainer'

import SearchBarComponent from '../components/SearchBarComponent'

export default class Layout extends React.Component {
  render() {
    const style = {
      //background: '#ccffff',
    }
    return (
      <div class="container" style={style}>
        <HeaderContainer/>
        <SearchBarComponent/>
        {this.props.children}
      </div>
    )
  }
}