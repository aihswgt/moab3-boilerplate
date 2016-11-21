import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Input } from 'reactstrap'
import * as actions from '../actions/actions'

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.textInput).focus()
  }
  handleSubmit(e) {
    const text = e.target.value.trim()
    console.log('KEYCODE', e.which)
    if(e.which === 13) {
      actions.editUserdata(this.props.userIndex, this.props.labelname.toLowerCase(), text)
      actions.toggleEdit(this.props.labelname)
      console.log('ENTER')
    }if(e.which === 27) {
      actions.toggleEdit(this.props.labelname)
    }
  }
  handleChange(e) {
    const value = e.target.value
    console.log('current text value', value)
    this.setState({value})
  }
  render() {
    return (
      <div>
        <Input type="text" onChange={this.handleChange}
               onKeyDown={this.handleSubmit} ref="textInput" value={this.state.value}/>
      </div>
    )
  }
}
