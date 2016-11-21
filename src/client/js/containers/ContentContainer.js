import React from 'react'
import { Jumbotron, Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBlock } from 'reactstrap'
let _ = require('lodash')
import Store from '../stores/store'
import { Link } from 'react-router'

import CardComponent from '../Components/CardComponent'
import ContactContainer from './ContactContainer'



export default class ContentContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      detail: this.props.params.id
    }
    console.log('THISHIHTSIHTISHTI' + this.props.params)
    this.getUsers = this.getUsers.bind(this)
    this.showDetail = this.showDetail.bind(this)
  }
  componentWillMount() {
    Store.on('change', this.getUsers)
    Store.on('showDetail', this.showDetail)
  }
  componentWillUnmount() {
    Store.removeListener('change', this.getUsers)
    Store.removeListener('showDetail', this.showDetail)
  }
  getUsers() {
    this.setState({
      users: Store.getUsers()
    })
  }
  showDetail(index) {
    this.setState({
      detail: index
    })
    console.log('Showing detail of ' + this.state.detail)
  }
  goBack() {
    this.setState({
      detail: undefined
    })
  }
  render() {
    const { users } = this.state

    let cards = users.map((user, index) => {
      return <CardComponent data={user} key={index} index={index}/>
    })
    let group = _.chunk(cards, 3).map((group, index) => {
      return <CardDeck  key={index}>{group}</CardDeck>
    })

    return (
      <Jumbotron style={{paddingTop: '10pt', paddingBottom: '5pt'}}>
        <div class="row">
          {this.state.detail === undefined ? <CardDeck>
            {group}
          </CardDeck> : <div class="container">
            {/* <h1>{this.state.detail}</h1> */}
            <Link to="/"><Button class="ml-1"onClick={() => this.goBack()}>
              Back
            </Button></Link>
            <p></p>
            <ContactContainer data={users[this.state.detail]} userIndex={this.state.detail} />
          </div>}
        </div>
      </Jumbotron>

    )
  }
}