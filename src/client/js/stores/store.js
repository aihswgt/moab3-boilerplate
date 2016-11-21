import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import axios from 'axios'

class Store extends EventEmitter {
  constructor() {
    super()
    this.initStore()
  }
  getUsers() {
    return this.users
  }
  initStore() {
    axios.get('https://randomuser.me/api/?results=15')
      .then((res) => {
        this.users = res.data.results
        console.log(this)
        this.emit('change')
      })
  }
  handleActions(action) {
    console.log('Received the action: ' + action.type)
    switch(action.type) {
      case 'FETCH_USERS':
        this.initStore()
        break
      case 'SHOW_DETAIL':
        this.emit('showDetail', action.index)
        break
      case 'TOGGLE_EDIT':
        this.emit('toggleEdit', action.labelname)
        break
      case 'EDIT_USERDATA':
        this.changeUserdata(action.index, action.prop, action.data)
        break
      default:
        this.emit('change')
    }
  }
  changeUserdata(index, prop, data) {
    console.log('IN CHANGEUSERDATA! ' + prop)
    console.log(this.users)
    let users = this.users
    switch(prop) {
      case 'street':
      case 'city':
      case 'state':
      case 'postcode':
        users[index] = {...users[index], ['location']: {...users[index].location, [prop]: data}}
        break
      case 'first':
      case 'last':
        users[index] = {...users[index], ['name']: {...users[index].name, [prop]: data}}
        break
      default:
        users[index] = {...users[index], [prop]: data}
    }
    this.users = [...users]
    console.log(this.users)
    this.emit('change')
  }
}

const store = new Store
dispatcher.register(store.handleActions.bind(store))

// Make this available on the browser console
window.dispatcher = dispatcher

export default store