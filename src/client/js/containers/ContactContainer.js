import React from 'react'
import LabelComponent from '../Components/LabelComponent'
import { CardImg } from 'reactstrap'

export default class ContactContainer extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    const style = {
      //background: 'yellow',
      //border: '1px solid'
    }
    const imgStyle = {

    }
    const user = this.props.data

    return (
      <div>
        {user ? <div class="form">
          <div class="col-md-4" style={{position: 'absolute'}}>
            <CardImg src={user.picture.large} alt="Card image cap"/>
          </div>
          <div class="col-md-8 offset-md-4" style={style}>
            <LabelComponent labelname={'First'} value={user.name.first} userIndex={this.props.userIndex}/>
          </div>
          <div class="col-md-8 offset-md-4" style={style}>
            <LabelComponent labelname={'Last'} value={user.name.last} userIndex={this.props.userIndex}/>
          </div>
          <div class="col-md-8 offset-md-4" style={style}>
            <LabelComponent labelname={'Phone'} value={user.phone} userIndex={this.props.userIndex}/>
          </div>
          <div class="col-md-12" style={style}>
            <LabelComponent labelname={'Street'} value={user.location.street} userIndex={this.props.userIndex}/>
          </div>
          <div class="col-md-12" style={style}>
            <LabelComponent labelname={'City'} value={user.location.city} userIndex={this.props.userIndex}/>
          </div>
          <div class="col-md-12" style={style}>
            <LabelComponent labelname={'State'} value={user.location.state} userIndex={this.props.userIndex}/>
          </div>
          <div class="col-md-12" style={style}>
            <LabelComponent labelname={'Postcode'} value={user.location.postcode} userIndex={this.props.userIndex}/>
          </div>
        </div> : <h1>Nothing here</h1>}
      </div>
    )
  }
}