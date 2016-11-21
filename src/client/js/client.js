// Here goes your app!
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'

import LayoutContainer from './containers/LayoutContainer'
import ContentContainer from './containers/ContentContainer'

import store from './stores/store'

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from="/" to="/contacts"/>
    <Route path="/" component={LayoutContainer}>
      <Route path="contacts" component={ContentContainer}></Route>
      <Route path="contact/:id" component={ContentContainer}></Route>
    </Route>
  </Router>
, app)

// for testing purpose!
window.store = store
