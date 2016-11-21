import React from 'react'
import InputComponent from './InputComponent'
import { Button, Label, FormGroup } from 'reactstrap'
import Store from '../stores/store'

export default class LabelComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleEdit(labelname, b) {
    if(labelname === this.props.labelname) {
      this.setState({
        edit: b
      })
    }
  }
  componentWillMount() {
    Store.on('toggleEdit', this.handleEdit)
  }
  componentWillUnmount() {
    Store.removeListener('toggleEdit', this.handleEdit)
  }
  render() {
    return (
      <div class="container">
        <FormGroup class="row">
          <div class="col-md-3">{this.props.labelname}</div>
          <div class="col-md-1">:</div>
          <div class="container col-md-8">
            {!this.state.edit ? <div>
                <span>{this.props.value}</span><Button onClick={() => this.handleEdit(this.props.labelname, true)} class="btn float-xs-right">Edit</Button>
              </div> : <InputComponent labelname={this.props.labelname} value={this.props.value} userIndex={this.props.userIndex}/>
            }
          </div>
        </FormGroup>
      </div>
    )
  }
}