import dispatcher from '../dispatcher'
const FETCH_USERS = 'FETCH_USERS'
const FETCH_USERS_FULLFILLED = 'FETCH_USERS_FULLFILLED'
const SHOW_DETAIL = 'SHOW_DETAIL'
const TOGGLE_EDIT = 'TOGGLE_EDIT'
const EDIT_USERDATA = 'EDIT_USERDATA'

export function fetchUsers() {
  dispatcher.dispatch({
    type: FETCH_USERS
  })
}
export function showDetail(index) {
  dispatcher.dispatch({
    type: SHOW_DETAIL,
    index
  })
}
export function toggleEdit(labelname) {
  dispatcher.dispatch({
    type: TOGGLE_EDIT,
    labelname
  })
}
export function editUserdata(index, prop, data) {
  dispatcher.dispatch({
    type: EDIT_USERDATA,
    index,
    prop,
    data
  })
}