import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBlock } from 'reactstrap';
import * as actions from '../actions/actions'
import { Link } from 'react-router'

export default class CardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.detailClick = this.detailClick.bind(this)
  }
  detailClick() {
    actions.showDetail(this.props.index)
  }
  render() {
    const imgStyle = {
      topWidth: '50%',
    }
    const user = this.props.data
    return (
      user ? <Card>
        <div class="card-img-container">
        </div>
        <CardImg class="rounded-circle align-middle" style={imgStyle} src={user.picture.large} alt="Card image cap" />
        <CardBlock>
          <CardTitle>{user.name.first} {user.name.last}</CardTitle>
          <CardSubtitle>{user.login.username}</CardSubtitle>
          <CardText>{}</CardText>
          <Link to={`/contact/${this.props.index}`}><Button onClick={this.detailClick}>Show Details</Button></Link>
        </CardBlock>
      </Card> : {}

    )
  }
}